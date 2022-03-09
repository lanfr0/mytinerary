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
    time: Date
};

export type Day = {
    name: string,
    day: Date
}