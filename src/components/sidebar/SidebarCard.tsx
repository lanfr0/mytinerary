import React from "react";

interface SidebarCardProps {
  empty: boolean;
}

export const SidebarCard: React.FC<SidebarCardProps> = ({ empty }) => {
  return (
    <div
      className={`w-full min-h-[100px] max-w-lg rounded-lg shadow-2xl transition-all duration-200 ${
        empty
          ? "text-gray-400 hover:text-black "
          : "text-white bg-[url('./assets/img-1.jpg')] bg-no-repeat bg-cover bg-center"
      } `}
    >
      <div
        className={`flex md:flex-row flex-col p-[10px] rounded-lg h-full transition-all duration-200 ${
          empty
            ? "bg-white border border-gray-400 hover:border-black"
            : "bg-gradient-to-r from-black/10 to-gray-800"
        }`}
      >
        {empty ? (
          <div className="flex justify-center self-center w-full text-lg uppercase">
            Aggiungi
          </div>
        ) : (
          <>
            <div className="invisible sm:visible">
              <p className="">25/03/2022</p>
              <p className="">28/03/2022</p>
            </div>
            <div className="self-end mt-auto grow text-right">
              <h3 className="text-2xl">Londra</h3>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
