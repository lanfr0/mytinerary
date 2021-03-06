import React, { useCallback, useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import { CardDetails } from "./CardDetails";
import { useActiveTripStore } from "../../stores/ActiveTripContext";
import { Day } from "../../components/model/rest";
import { nanoid } from "nanoid";
import { NoActivityPlanned } from "./NoActivityPlanned";
import { classNames } from "../../utils/clsx";
import { FaPlus } from "react-icons/fa";
import apiClient from "../../http-common";

const _MS_PER_DAY = 1000 * 60 * 60 * 24;

function dateDiffInDays(a: Date, b: Date) {
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

function addDays(a: Date, d: number) {
  var date = new Date(a);
  date.setDate(date.getDate() + d);
  return date;
}

export const TabDays: React.FC = () => {
  const { activeTrip } = useActiveTripStore();

  const [isLoading, setLoading] = useState(false);
  const [days, setDays] = useState<Day[]>([] as Day[]);

  async function getDays() {
    try {
      const response = await apiClient.get(`/api/v1/day/${activeTrip.id}`);

      const gg = response.data.map((day: Day) => ({
        ...day,
        atDate: new Date(day.atDate),
      }));

      setDays(gg);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  }

  useEffect(() => {
    setLoading(true);
    getDays();
  }, []);

  const handleAddDay = useCallback(() => {
    const daysOfTrip = dateDiffInDays(activeTrip.fromDate, activeTrip.toDate);

    if (days.length <= daysOfTrip) {
      setDays([
        ...days,
        {
          id: nanoid(),
          name: `Day ${days.length + 1}`,
          atDate: addDays(activeTrip.fromDate, days.length),
          tripId: activeTrip.id,
        },
      ]);
    }
  }, [activeTrip.fromDate, activeTrip.id, activeTrip.toDate, days]);

  return (
    <div className="grow">
      <Tab.Group>
        <Tab.List className="flex mb-4">
          {days.map((d) => (
            <Tab
              className={({ selected }) =>
                classNames(
                  `mx-3 p-3 border-b-2 transition-colors duration-500`,
                  selected ? "border-bluePrimary" : "border-white"
                )
              }
              key={nanoid()}
            >
              <div className="flex flex-col content-center">
                <p className="font-semibold">{d.name}</p>
                <p className="text-xs">{d.atDate.toLocaleDateString()}</p>
              </div>
            </Tab>
          ))}
          <div className="self-center ml-auto">
            <div
              className="h-10 w-10 bg-bluePrimary rounded-full text-white justify-center items-center flex cursor-pointer"
              role="tab"
            >
              <FaPlus onClick={handleAddDay} />
            </div>
          </div>
        </Tab.List>
        <Tab.Panels>
          {days.map((d, index) => {
            return (index + 1) % 2 === 0 ? (
              <Tab.Panel key={nanoid()}>
                <CardDetails />
              </Tab.Panel>
            ) : (
              <Tab.Panel key={nanoid()}>
                <NoActivityPlanned />
              </Tab.Panel>
            );
          })}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
