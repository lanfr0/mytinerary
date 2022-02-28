import React from "react";
import { SidebarCard } from "../components/sidebar/SidebarCard";

export const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-row h-screen w-full">
      <div className="h-full w-2/5 bg-[#EFA01D] pt-24 flex flex-col gap-8 px-12 max-w-2xl">
        <SidebarCard empty={false} />
        <SidebarCard empty={false} />
        <SidebarCard empty />
      </div>
      <div className="flex flex-row grow">
        <div className="w-8 h-8 rounded-full bg-slate-600 ml-auto m-8" />
      </div>
    </div>
  );
};
