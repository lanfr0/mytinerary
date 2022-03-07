import React from "react";

interface SidebarCardProps {
  empty: boolean;
}

export const SidebarCard: React.FC<SidebarCardProps> = ({ empty }) => {
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
              <p className="">25/03/2022</p>
              <p className="">28/03/2022</p>
            </div>
            <div className="self-end mt-auto grow sm:text-left md:text-right">

            {/* <div className=""> */}
              <h3 className="text-2xl">Londra</h3>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
