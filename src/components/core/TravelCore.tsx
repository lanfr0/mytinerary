import React from "react";
import { FaPlus } from "react-icons/fa";
import { CardDetails } from "./CardDetails";
import { CardHeaderInfo } from "./CardHeaderInfo";

const _MS_PER_DAY = 1000 * 60 * 60 * 24;

function dateDiffInDays(a: Date, b: Date) {
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

export const TravelCore: React.FC = () => {
  return (
    <>
      <div className="bg-white text-bluePrimary rounded-xl shadow-2xl p-8">
        <CardHeaderInfo />
      </div>
      <div className="w-full mt-10">
        <div className="w-full flex justify-center gap-8">
          <CardDetails />
          <div className="h-10 w-10 bg-bluePrimary rounded-full text-white justify-center items-center flex cursor-pointer">
            <FaPlus />
          </div>
        </div>
      </div>
    </>
  );
};
