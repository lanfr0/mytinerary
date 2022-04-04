import React from "react";
import { FaDollarSign } from "react-icons/fa";
import { TripInfo } from "../../components/model/rest";

interface CardHeaderInfoProps {
  activeCard: TripInfo;
}

export const CardHeaderInfo: React.FC<CardHeaderInfoProps> = ({
  activeCard,
}) => {
  return (
    <div className="flex flex-col md:flex-row w-full h-full gap-8">
      <div className="flex flex-col gap-6 w-full md:w-2/3 order-2 md:order-1">
        <div>
          <h5 className="text-3xl font-semibold">{activeCard.name}</h5>
          <p>{activeCard.description}</p>
        </div>
        <div className="flex flex-row items-center gap-3">
          <FaDollarSign className="text-2xl opacity-50" />
          <p className="tracking-wide">{activeCard.budget}</p>
        </div>
        <div className="flex flex-row items-center gap-4">
          <div className="w-5 h-5 bg-bluePrimary rounded-full opacity-50" />
          <p className="tracking-wide">
            {activeCard.fromDate.toLocaleDateString()}
          </p>
        </div>
        <div className="flex flex-row items-center gap-4">
          <div className="w-5 h-5 bg-bluePrimary rounded-full opacity-50" />
          <p className="tracking-wide">{activeCard.toDate.toLocaleDateString()}</p>
        </div>
      </div>
      <div className="w-full md:w-1/3 border border-dashed border-bluePrimary h-24 md:h-64 order-1 md:order-2" />
    </div>
  );
};
