import React, {  } from "react";
import { FaDollarSign, FaPlus } from "react-icons/fa";
import { CardInfo } from "../model/rest";

interface TravelDetailProps {
  cardInfo: CardInfo;
}

const _MS_PER_DAY = 1000 * 60 * 60 * 24;

function dateDiffInDays(a: Date, b: Date) {
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

export const TravelDetail: React.FC<TravelDetailProps> = ({ cardInfo }) => {
  const travelDays = dateDiffInDays(cardInfo.from, cardInfo.to);

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
      <div className="w-full h-full">
        <div className="w-full flex justify-center mt-8 bg-red-200">
          <div className="h-10 w-10 bg-[#062538] rounded-full text-white justify-center items-center flex cursor-pointer">
            <FaPlus
              onClick={() => {
                console.log("click");
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
