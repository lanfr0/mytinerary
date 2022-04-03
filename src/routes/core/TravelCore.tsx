import React from "react";
import { useActiveTripStore } from "../../stores/ActiveTripContext";
import { CardHeaderInfo } from "./CardHeaderInfo";
import lodash from "lodash";
import { TabDays } from "./TabDays";

export const TravelCore: React.FC = () => {
  const { activeTrip } = useActiveTripStore();

  return (
    <>
      {lodash.isEmpty(activeTrip) ? (
        <div className="text-bluePrimary p-8">
          <h5 className="text-4xl font-semibold text-center">
            It looks like there's no one trip selected!
          </h5>
          <div>
            <h6 className="text-xl text-center">What are you waiting for?</h6>
            <p className="text-center">
              Start by selecting one trip or creating a new one
            </p>
          </div>
        </div>
      ) : (
        <>
          <div className="bg-white text-bluePrimary rounded-xl shadow-2xl p-8">
            <CardHeaderInfo activeCard={activeTrip} />
          </div>
          <div className="w-full mt-10">
            <div className="w-full flex justify-center gap-8">
              <TabDays />
            </div>
          </div>
        </>
      )}
    </>
  );
};
