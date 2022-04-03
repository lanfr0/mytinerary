import React from "react";
import "./App.css";
import { MainLayout } from "./layout/MainLayout";
import { ActiveTripProvider } from "./stores/ActiveTripContext";

function App() {
  return (
    <ActiveTripProvider>
      <MainLayout />
    </ActiveTripProvider>
  );
}

export default App;
