import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import { SidebarCard } from "../components/sidebar/SidebarCard";
import { FaCheck, FaTimes } from "react-icons/fa";
import { TravelCard } from "../components/core/TravelCard";
import { useForm } from "react-hook-form";

export const MainLayout: React.FC = () => {
  const [enabled, setEnabled] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  return (
    <div className="flex h-screen w-screen bg-[#fcf0e7]">
      <Switch.Group>
        <div className="fixed w-full z-10 h-12 mt-5 flex justify-between px-5 items-center">
          <Switch checked={enabled} onChange={setEnabled}>
            <FaTimes className="text-2xl text-[#062538]" />
          </Switch>
          <div className="h-10 w-10 bg-[#062538] rounded-full" />
        </div>
        <div
          className={`${
            enabled ? "px-2 md:px-12" : "-translate-x-full md:translate-x-0 md:w-44 md:px-2 absolute md:relative"
          } h-full w-2/5 bg-[#ee0131] pt-24 flex flex-col gap-8 transition-all ease-in-out duration-500`}
        >
          <SidebarCard empty={false} />
        </div>
      </Switch.Group>
      <div className="flex flex-col h-full w-full pt-24 px-4 transition-all ease-in-out duration-500 ">
        <div className="bg-white text-[#062538] rounded-xl shadow-2xl p-6 max-w-full">
        <form
          className="flex flex-col items-start gap-6"
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >
          <input
            className="text-md bg-white text-left focus:outline-none rounded-md p-3 w-full md:w-2/5 focus:bg-gray-50 transition-colors duration-200"
            placeholder="Name"
            {...register("name", { required: true })}
          />
          <input
            className="text-md bg-white text-left focus:outline-none rounded-md p-3 w-full md:w-2/5 focus:bg-gray-50 transition-colors duration-200"
            placeholder="Description"
            {...register("Description", { required: true })}
          />
          <div className="flex flex-row justify-between text-gray-500 w-full">
            <button
              className="text-xl border border-gray-200 p-3 rounded-full"
              type="submit"
            >
              <FaCheck />
            </button>
            <button
              className="text-xl border border-gray-200 p-3 rounded-full"
              type="reset"
            >
              <FaTimes />
            </button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
};
