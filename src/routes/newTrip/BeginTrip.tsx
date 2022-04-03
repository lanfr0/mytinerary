import React from "react";
import { CreationTripForm } from "./CreationTripForm";
import { Route, Routes } from "react-router-dom";

export const BeginTrip: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<CreationTripForm />}></Route>
    </Routes>
  );
};
