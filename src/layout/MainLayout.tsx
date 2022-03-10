import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import { SidebarCard } from "../components/sidebar/SidebarCard";
import { FaTimes } from "react-icons/fa";
import { CardInfo } from "../components/model/rest";
import { nanoid } from "nanoid";
import { TravelDetail } from "../components/core/TravelDetail";

const card: CardInfo[] = [
  {
    name: "Londra",
    from: new Date("25 Mar 2022"),
    to: new Date("28 Mar 2022"),
    description:
      "Viaggio a Lndn. Parto per tre giorni a Londra con Alice. Poca spesa tanta resa e speriamo di non trovare brutto tempo.",
    budget: 800,
  },
];

// TODO: cambiare la sidebar perché lo stretching dell'elemento crea ulteriori render

export const MainLayout: React.FC = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="flex h-screen w-screen">
      <Switch.Group>
        <div className="fixed w-full z-10 p-5 flex justify-between px-5 items-center backdrop-blur-sm border-b border-[#ee0131]">
          <Switch checked={enabled} onChange={setEnabled}>
            <FaTimes className="text-2xl text-[#062538]" />
          </Switch>
          <div className="h-10 w-10 bg-[#062538] rounded-full" />
        </div>
        <div
          className={`${
            enabled
              ? "px-2 md:px-12"
              : "-translate-x-full md:translate-x-0 md:w-44 md:px-2"
          } h-full w-2/5 bg-[#ee0131] pt-24 flex flex-col gap-8 transition-all ease-in-out duration-500 fixed`}
        >
          {card.map((c) => (
            <SidebarCard card={c} empty={false} key={nanoid()} />
          ))}
        </div>
      </Switch.Group>
      <div className={`${enabled ? "ml-[40%]" : "ml-[11rem]"} w-full flex flex-col h-full pt-24 px-4 md:px-12 transition-all ease-in-out duration-500`}>
        <TravelDetail cardInfo={card[0]} />
      </div>
    </div>
  );
};
