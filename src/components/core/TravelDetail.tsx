import { Tab } from "@headlessui/react";
import React from "react";
import { FaDollarSign, FaPlus } from "react-icons/fa";
import { CardInfo, DayType } from "../model/rest";

interface TravelDetailProps {
  cardInfo: CardInfo;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const _MS_PER_DAY = 1000 * 60 * 60 * 24;

function dateDiffInDays(a: Date, b: Date) {
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

const fakeData: DayType[] = [
  {
    day: new Date(),
    name: "Day 1",
    activities: [
      {
        name: "Leave home",
        description: "Sveglia presto",
        time: "05:00",
      },
      {
        name: "Aeroporto Bergamo",
        description: "Partenza per Londra",
        time: "06:40",
      },
      {
        name: "Londra Stansted",
        description: "Arrivo a Londra Stansted",
        time: "07:40",
      },
      {
        name: "Point A Hotel",
        description: "Arrivo all'hotel",
        time: "10:00",
      },
      {
        name: "Camden Town",
        description: "Andiamo a visitare Camden Town",
        time: "10:45",
      },
      {
        name: "Primrose Hill",
        description: "Andiamo a visitare Primrose Hill",
        time: "12:00",
      },
    ],
  },
  {
    day: new Date(),
    name: "Day 2",
    activities: [
      {
        name: "Leave home",
        description: "Sveglia presto",
        time: "05:00",
      },
      {
        name: "Aeroporto Bergamo",
        description: "Partenza per Londra",
        time: "06:40",
      },
      {
        name: "Londra Stansted",
        description: "Arrivo a Londra Stansted",
        time: "07:40",
      },
      {
        name: "Aeroporto Bergamo",
        description: "Partenza per Londra",
        time: "06:40",
      },
      {
        name: "Londra Stansted",
        description: "Arrivo a Londra Stansted",
        time: "07:40",
      },
      {
        name: "Point A Hotel",
        description: "Arrivo all'hotel",
        time: "10:00",
      },
      {
        name: "Camden Town",
        description: "Andiamo a visitare Camden Town",
        time: "10:45",
      },
      {
        name: "Point A Hotel",
        description: "Arrivo all'hotel",
        time: "10:00",
      },
      {
        name: "Camden Town",
        description: "Andiamo a visitare Camden Town",
        time: "10:45",
      },
      {
        name: "Primrose Hill",
        description: "Andiamo a visitare Primrose Hill",
        time: "12:00",
      },
    ],
  },
];

export const TravelDetail: React.FC<TravelDetailProps> = ({ cardInfo }) => {
  const travelDays = dateDiffInDays(cardInfo.from, cardInfo.to);
  const tabOfDays = [] as DayType[];

  return (
    <>
      <div className="bg-white text-[#062538] rounded-xl shadow-2xl p-8">
        <div className="flex flex-col md:flex-row w-full h-full gap-8">
          <div className="flex flex-col gap-6 w-full md:w-2/3 order-2 md:order-1">
            <div>
              <h5 className="text-3xl font-semibold">{cardInfo.name}</h5>
              <p>{cardInfo.description}</p>
            </div>
            <div className="flex flex-row items-center gap-3">
              <FaDollarSign className="text-2xl opacity-50" />
              <p className="tracking-wide">{cardInfo.budget}</p>
            </div>
            <div className="flex flex-row items-center gap-4">
              <div className="w-5 h-5 bg-[#062538] rounded-full opacity-50" />
              <p className="tracking-wide">
                {cardInfo.from.toLocaleDateString()}
              </p>
            </div>
            <div className="flex flex-row items-center gap-4">
              <div className="w-5 h-5 bg-[#062538] rounded-full opacity-50" />
              <p className="tracking-wide">
                {cardInfo.to.toLocaleDateString()}
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 border border-dashed border-[#062538] h-24 md:h-64 order-1 md:order-2" />
        </div>
      </div>
      <div className="w-full h-full mt-10">
        <div className="w-full flex justify-center gap-8">
          <div className="grow">
            <div
              className={classNames(
                "bg-white rounded-xl p-3 shadow-2xl w-full"
              )}
            >
              {fakeData[1].activities.map((t) => (
                <div className="w-full h-full flex flex-col border-b border-dashed">
                  <div className="w-full flex flex-row gap-10 pb-3">
                    <p>{t.time}</p>
                    <div className="flex flex-col">
                      <p className="text-md">{t.name}</p>
                      <p className="text-xs">{t.description}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="w-full flex flex-row gap-10 pb-3 bg-red-200">
                Aggiunti attività
              </div>
            </div>
            {/* <Tab.Group>
              <Tab.List className="flex p-1">
                {fakeData.map((a) => (
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        "text-md leading-5 font-medium text-[#062538] bg-inherit my-2 px-8 py-3 border-b border-[#062538]/20 transition-all ease-in",
                        selected
                          ? "border-[#062538]/100"
                          : "hover:bg-white/[0.20]"
                      )
                    }
                  >
                    {a.name}
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels className="mt-2">
                {fakeData.map((a) => (
                  <Tab.Panel
                    className={classNames(
                      "bg-white rounded-xl p-3 shadow-2xl w-full"
                    )}
                  >
                    {a.activities.map((t) => (
                      <div className="w-full h-full flex flex-col border-b border-dashed">
                        <div className="w-full flex flex-row gap-10 pb-3">
                          <p>{t.time}</p>
                          <div className="flex flex-col">
                            <p className="text-md">{t.name}</p>
                            <p className="text-xs">{t.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="w-full flex flex-row gap-10 pb-3 bg-red-200">
                      Aggiunti attività
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group> */}
          </div>

          <div className="h-10 w-10 bg-[#062538] rounded-full text-white justify-center items-center flex cursor-pointer">
            <FaPlus />
          </div>
        </div>
      </div>
    </>
  );
};
