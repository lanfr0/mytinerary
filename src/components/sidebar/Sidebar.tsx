import React from "react";
import { Disclosure } from "@headlessui/react";
import { FaChevronLeft } from "react-icons/fa";

export const Sidebar: React.FC = () => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button>
            <div className="w-8 h-8 rounded-full bg-red-700 flex">
              <FaChevronLeft
                className={`${
                  open ? "transform rotate-180" : ""
                } w-4 h-4 text-white m-auto z-10`}
              />
            </div>
          </Disclosure.Button>
          <Disclosure.Panel className="h-full w-2/5 bg-slate-500 absolute top-0 left-0">
            If you're unhappy with your purchase for any reason, email us within
            90 days and we'll refund you in full, no questions asked.
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
