import React from "react";
import { CardInfo } from "../model/rest";

interface SidebarCardProps {
  card: CardInfo;
  empty: boolean;
}

export const SidebarCard: React.FC<SidebarCardProps> = ({ card, empty }) => {
  return (
    <div
      className={`w-full min-h-[100px] max-w-lg rounded-lg shadow-2xl transition-all duration-200 text-gray-700`}
    >
      <div
        className={`flex flex-col p-[10px] rounded-lg h-full transition-all duration-200 bg-white`}
      >
        {empty ? (
          <div className="flex justify-center self-center w-full text-lg uppercase">
            Aggiungi
          </div>
        ) : (
          <>
            <div className="">
              <p className="">{card.from.toLocaleDateString()}</p>
              <p className="">{card.to.toLocaleDateString()}</p>
            </div>
            <div className="self-end mt-auto grow sm:text-left md:text-right">
              <h3 className="text-2xl">{card.name}</h3>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
