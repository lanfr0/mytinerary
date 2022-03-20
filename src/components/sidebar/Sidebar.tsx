import React, { useState } from "react";
import { nanoid } from "nanoid";
import { SidebarCard } from "./SidebarCard";
import { TripInfo } from "../model/rest";
import { cards } from "../../assets/mockData";
import lodash from "lodash";

interface sidebarProps {}

export const Sidebar: React.FC = () => {
  const [tripPlanned, setTripPlanned] = useState<TripInfo[]>([] as TripInfo[]); // TODO: fetch trips

  return (
    <div className="w-1/3 flex flex-col gap-8 py-28 px-10 bg-bluePrimary transition-all ease-in-out duration-500 overflow-y-auto">
      {lodash.isEmpty(tripPlanned) ? (
        <div className="w-full h-full flex flex-col text-white">
          <div className="flex flex-col p-8 rounded-lg transition-all duration-200 bg-white/10 border border-dashed border-white hover:bg-white/20 cursor-pointer">
            <div className="flex justify-center self-center w-full text-lg uppercase">
              Aggiungi
            </div>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 800 800"
          >
            <g
              stroke-width="10"
              stroke="hsl(227, 0%, 100%)"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-dasharray="23 21"
              transform="matrix(-0.2923717047227371,-0.9563047559630353,0.9563047559630353,-0.2923717047227371,143.42677950388077,899.470584274309)"
            >
              <path
                d="M219 219Q440 259 400 400Q307 505 581 581 "
                marker-end="url(#SvgjsMarker1755)"
              ></path>
            </g>
            <defs>
              <marker
                markerWidth="4.5"
                markerHeight="4.5"
                refX="2.25"
                refY="2.25"
                viewBox="0 0 4.5 4.5"
                orient="auto"
                id="SvgjsMarker1755"
              >
                <polygon
                  points="0,4.5 0,0 4.5,2.25"
                  fill="hsl(227, 0%, 100%)"
                ></polygon>
              </marker>
            </defs>
          </svg>

          <div className="flex flex-col gap-4">
            <h5 className="text-4xl font-semibold text-center">
              It looks like there's nothing planned!
            </h5>
            <div>
              <h6 className="text-xl text-center">What are you waiting for?</h6>
              <p className="text-center">Start planning your next trip!</p>
            </div>
          </div>
        </div>
      ) : (
        tripPlanned.map((tp) => (
          <SidebarCard card={tp} empty={false} key={nanoid()} />
        ))
      )}
    </div>
  );
};
