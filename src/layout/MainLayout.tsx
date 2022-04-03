import React from "react";
import { TravelCore } from "../routes/core/TravelCore";
import { Sidebar } from "../components/sidebar/Sidebar";
import { Navbar } from "../components/navbar/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import { CreationTripForm } from "../routes/newTrip/CreationTripForm";
import { Home } from "../routes/home/Home";

export const MainLayout: React.FC = () => {
  return (
    <div className="w-full h-screen min-h-screen flex">
      <Navbar />
      <Sidebar />
      <div className="w-full flex flex-col">
        <div className="w-full h-min overflow-auto pt-28 pb-20 px-10">
          <Home />
        </div>
      </div>
    </div>
  );
};
