import React, { useMemo, useState, useCallback } from "react";
import { TripInfo } from "../components/model/rest";

interface ActiveTripStore {
  activeTrip: TripInfo;
  setActiveTrip: (myTrip: TripInfo) => void;
}

const ActiveTripContext = React.createContext<ActiveTripStore>(
  {} as ActiveTripStore
);

export const ActiveTripProvider: React.FC = ({ children }) => {
  const [trip, setTrip] = useState<TripInfo>({} as TripInfo);

  const setter = useCallback((newTrip: TripInfo) => {
    setTrip(newTrip);
  }, []);

  const state = useMemo(() => {
    return {
      activeTrip: trip,
      setActiveTrip: setter,
    };
  }, [setter, trip]);

  return (
    <ActiveTripContext.Provider value={state}>
      {children}
    </ActiveTripContext.Provider>
  );
};

export const useActiveTripStore = (): ActiveTripStore =>
  React.useContext(ActiveTripContext);
