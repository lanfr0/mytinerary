export type TripInfo = {
  id: string;
  name: string;
  description: string;
  from: Date;
  to: Date;
  budget: number;
};

export type Activity = {
  name: string;
  description: string;
  time: string;
};

export type DayType = {
  name: string;
  day: Date;
  details: Activity[];
};

export type Day = {
  id: string;
  name: string;
  atDate: Date;
  tripId: string;
};
