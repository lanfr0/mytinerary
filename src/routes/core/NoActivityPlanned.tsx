import React from "react";

export const NoActivityPlanned: React.FC = () => {
  return (
    <div className="grow">
      <div className="bg-white rounded-xl p-3 shadow-2xl w-full">
        <div className="w-full flex flex-row gap-10 pb-3 border border-dashed border-bluePrimary rounded-lg px-3 py-3 ">
          <p className="transition-all">Aggiunti attività</p>
        </div>
        <h5 className="text-xl font-semibold text-center mt-5">
          Start by creating a new activity!
        </h5>
      </div>
    </div>
  );
};
