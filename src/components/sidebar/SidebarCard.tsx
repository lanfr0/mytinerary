import React, { useCallback } from "react";
import { useActiveTripStore } from "../../stores/ActiveTripContext";
import { TripInfo } from "../model/rest";

interface SidebarCardProps {
  card: TripInfo;
  empty: boolean;
}

export const SidebarCard: React.FC<SidebarCardProps> = ({ card, empty }) => {
  const { setActiveTrip } = useActiveTripStore();

  const handleClick = useCallback(() => {
    setActiveTrip(card);
  }, [card, setActiveTrip]);

  return (
    <div className="w-full min-h-[100px] max-w-lg rounded-lg shadow-2xl transition-all duration-200 text-gray-700">
      <button
        className="w-full flex flex-col p-[10px] rounded-lg h-full transition-all duration-200 bg-white"
        onClick={handleClick}
      >
        {empty ? (
          <div className="flex justify-center self-center w-full text-lg uppercase">
            Aggiungi
          </div>
        ) : (
          <>
            <div className="">
              <p className="">{card.fromDate.toLocaleDateString()}</p>
              <p className="">{card.toDate.toLocaleDateString()}</p>
            </div>
            <div className="self-end mt-auto grow sm:text-left md:text-right">
              <h3 className="text-2xl">{card.name}</h3>
            </div>
          </>
        )}
      </button>
    </div>
  );
};
