import React, { useState } from "react";
import { FaDollarSign } from "react-icons/fa";
import { cards } from "../../assets/mockData";

export const CardHeaderInfo: React.FC = () => {
  const [activeTrip, setActiveTrip] = useState(cards[0]);
  
  return (
    <div className="flex flex-col md:flex-row w-full h-full gap-8">
      <div className="flex flex-col gap-6 w-full md:w-2/3 order-2 md:order-1">
        <div>
          <h5 className="text-3xl font-semibold">{activeTrip.name}</h5>
          <p>{activeTrip.description}</p>
        </div>
        <div className="flex flex-row items-center gap-3">
          <FaDollarSign className="text-2xl opacity-50" />
          <p className="tracking-wide">{activeTrip.budget}</p>
        </div>
        <div className="flex flex-row items-center gap-4">
          <div className="w-5 h-5 bg-bluePrimary rounded-full opacity-50" />
          <p className="tracking-wide">
            {activeTrip.from.toLocaleDateString()}
          </p>
        </div>
        <div className="flex flex-row items-center gap-4">
          <div className="w-5 h-5 bg-bluePrimary rounded-full opacity-50" />
          <p className="tracking-wide">{activeTrip.to.toLocaleDateString()}</p>
        </div>
      </div>
      <div className="w-full md:w-1/3 border border-dashed border-bluePrimary h-24 md:h-64 order-1 md:order-2" />
    </div>
  );
};
