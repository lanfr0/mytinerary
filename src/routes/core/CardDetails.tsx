import React from "react";
import { activities } from "../../assets/mockData";
import { classNames } from "../../utils/clsx";

export const CardDetails: React.FC = () => {
  return (
    <div className="grow">
      <div className={classNames("bg-white rounded-xl p-3 shadow-2xl w-full")}>
        {activities[1].details.map((t) => (
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
        <div className="w-full flex flex-row gap-10 pb-3 border border-dashed border-bluePrimary rounded-lg px-3 py-3 ">
          <p className="transition-all">Aggiunti attività</p>
        </div>
      </div>
    </div>
  );
};
