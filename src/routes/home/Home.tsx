import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { TravelCore } from "../core/TravelCore";
import { CreationTripForm } from "../newTrip/CreationTripForm";

export const Home: React.FC = () => {
  return (
    <Routes>
      <Route path="/">
        <Route path="/home" element={<TravelCore />} />
        <Route path="/add-trip" element={<CreationTripForm />} />

        <Route path="*" element={<Navigate to="/home" replace/>} />
        <Route path="" element={<Navigate to="/home" replace/>} />
      </Route>
    </Routes>
  );
};
