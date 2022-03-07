import React, { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import { SidebarCard } from "../components/sidebar/SidebarCard";
import { FaTimes } from "react-icons/fa";

export const MainLayout: React.FC = () => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    console.log(enabled);
  }, [enabled]);

  return (
    <div className="flex flex-row h-screen w-full">
      <Switch.Group>
        <div
          className={`${
            enabled ? "px-12" : "bg-gray-700 w-32 px-2"
          } h-full w-2/5 bg-[#EFA01D] pt-16 flex flex-col gap-8 max-w-2xl transition-all ease-in-out duration-500`}
        >
          <div className={`${enabled ? "" : ""} w-full flex justify-end`}>
            <Switch checked={enabled} onChange={setEnabled}>
              <FaTimes className={`${enabled ? "" : "rotate-45"} m-auto`} />
            </Switch>
          </div>
          <SidebarCard empty={false} />
        </div>
      </Switch.Group>
      <div className="flex flex-col grow h-full"></div>
    </div>
  );
};
