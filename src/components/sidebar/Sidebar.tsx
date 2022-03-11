import React from "react";
import { nanoid } from "nanoid";
import { SidebarCard } from "./SidebarCard";
import { CardInfo } from "../model/rest";

interface sidebarProps {
  menuItems: CardInfo[];
}

export const Sidebar: React.FC<sidebarProps> = ({ menuItems }) => {
  return (
    <div className="w-1/3 flex flex-col gap-8 py-28 px-10 bg-bluePrimary transition-all ease-in-out duration-500 overflow-y-auto">
      {menuItems.map((c) => (
        <SidebarCard card={c} empty={false} key={nanoid()} />
      ))}
    </div>
  );
};
