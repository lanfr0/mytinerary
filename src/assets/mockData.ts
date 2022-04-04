import { DayType, TripInfo, Day } from "../components/model/rest";

const allTrips: TripInfo[] = [
  {
    id: "c340e1c0-681d-40b5-84f9-11ca6837bf1e",
    name: "Londra",
    fromDate: new Date("25 Mar 2022"),
    toDate: new Date("28 Mar 2022"),
    description:
      "Viaggio a Lndn. Parto per tre giorni a Londra con Alice. Poca spesa tanta resa e speriamo di non trovare brutto tempo.",
    budget: 800,
  },
  {
    id: "697555c1-d526-44cd-b078-2d72d1da2e0d",
    name: "Parigi",
    fromDate: new Date("02 Jan 2020"),
    toDate: new Date("06 Jan 2020"),
    description:
      "Viaggio a Parigi. Regalo di Natale per Alice. Non ci sono mai stato e sembra una città molto carina. Vedremo se mi piacerà.",
    budget: 650,
  },
];

const days: Day[] = [
  {
    id: "db194664-efe8-4289-956c-0f3b74fd28fb",
    name: "Day 1",
    atDate: new Date("2022-03-25 00:00:00.000"),
    tripId: "c340e1c0-681d-40b5-84f9-11ca6837bf1e",
  },
  {
    id: "600ad824-93c2-4351-b6f2-f8b0a47b82e7",
    name: "Day 2",
    atDate: new Date("2022-03-26 00:00:00.000"),
    tripId: "c340e1c0-681d-40b5-84f9-11ca6837bf1e",
  },
  {
    id: "942af277-1c25-4265-9aee-7defb1421623",
    name: "Day 3",
    atDate: new Date("2022-03-27 00:00:00.000"),
    tripId: "c340e1c0-681d-40b5-84f9-11ca6837bf1e",
  },
];

const activities: DayType[] = [
  {
    day: new Date(),
    name: "Day 1",
    details: [
      {
        name: "Leave home",
        description: "Sveglia presto",
        time: "05:00",
      },
      {
        name: "Aeroporto Bergamo",
        description: "Partenza per Londra",
        time: "06:40",
      },
      {
        name: "Londra Stansted",
        description: "Arrivo a Londra Stansted",
        time: "07:40",
      },
      {
        name: "Point A Hotel",
        description: "Arrivo all'hotel",
        time: "10:00",
      },
      {
        name: "Camden Town",
        description: "Andiamo a visitare Camden Town",
        time: "10:45",
      },
      {
        name: "Primrose Hill",
        description: "Andiamo a visitare Primrose Hill",
        time: "12:00",
      },
    ],
  },
  {
    day: new Date(),
    name: "Day 2",
    details: [
      {
        name: "Leave home",
        description: "Sveglia presto",
        time: "05:00",
      },
      {
        name: "Aeroporto Bergamo",
        description: "Partenza per Londra",
        time: "06:40",
      },
      {
        name: "Londra Stansted",
        description: "Arrivo a Londra Stansted",
        time: "07:40",
      },
      {
        name: "Aeroporto Bergamo",
        description: "Partenza per Londra",
        time: "06:40",
      },
      {
        name: "Londra Stansted",
        description: "Arrivo a Londra Stansted",
        time: "07:40",
      },
      {
        name: "Point A Hotel",
        description: "Arrivo all'hotel",
        time: "10:00",
      },
      {
        name: "Camden Town",
        description: "Andiamo a visitare Camden Town",
        time: "10:45",
      },
      {
        name: "Point A Hotel",
        description: "Arrivo all'hotel",
        time: "10:00",
      },
      {
        name: "Camden Town",
        description: "Andiamo a visitare Camden Town",
        time: "10:45",
      },
      {
        name: "Primrose Hill",
        description: "Andiamo a visitare Primrose Hill",
        time: "12:00",
      },
    ],
  },
];

export { allTrips, activities, days };
