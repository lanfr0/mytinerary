export type CardInfo = {
  name: string;
  description: string;
  from: Date;
  to: Date;
  budget: number;
};

export type Activity = {
    name:string,
    description: string,
    time: string
};

export type DayType = {
    name: string,
    day: Date
    activities: Activity[]
}