import React from "react";
import { CardInfo } from "../components/model/rest";
import { TravelCore } from "../components/core/TravelCore";
import { Sidebar } from "../components/sidebar/Sidebar";
import { Navbar } from "../components/navbar/Navbar";

const cards: CardInfo[] = [
  {
    name: "Londra",
    from: new Date("25 Mar 2022"),
    to: new Date("28 Mar 2022"),
    description:
      "Viaggio a Lndn. Parto per tre giorni a Londra con Alice. Poca spesa tanta resa e speriamo di non trovare brutto tempo.",
    budget: 800,
  },
  {
    name: "Londra",
    from: new Date("25 Mar 2022"),
    to: new Date("28 Mar 2022"),
    description:
      "Viaggio a Lndn. Parto per tre giorni a Londra con Alice. Poca spesa tanta resa e speriamo di non trovare brutto tempo.",
    budget: 800,
  },
  {
    name: "Londra",
    from: new Date("25 Mar 2022"),
    to: new Date("28 Mar 2022"),
    description:
      "Viaggio a Lndn. Parto per tre giorni a Londra con Alice. Poca spesa tanta resa e speriamo di non trovare brutto tempo.",
    budget: 800,
  },
  {
    name: "Londra",
    from: new Date("25 Mar 2022"),
    to: new Date("28 Mar 2022"),
    description:
      "Viaggio a Lndn. Parto per tre giorni a Londra con Alice. Poca spesa tanta resa e speriamo di non trovare brutto tempo.",
    budget: 800,
  },
  {
    name: "Londra",
    from: new Date("25 Mar 2022"),
    to: new Date("28 Mar 2022"),
    description:
      "Viaggio a Lndn. Parto per tre giorni a Londra con Alice. Poca spesa tanta resa e speriamo di non trovare brutto tempo.",
    budget: 800,
  },
  {
    name: "Londra",
    from: new Date("25 Mar 2022"),
    to: new Date("28 Mar 2022"),
    description:
      "Viaggio a Lndn. Parto per tre giorni a Londra con Alice. Poca spesa tanta resa e speriamo di non trovare brutto tempo.",
    budget: 800,
  },
  {
    name: "Londra",
    from: new Date("25 Mar 2022"),
    to: new Date("28 Mar 2022"),
    description:
      "Viaggio a Lndn. Parto per tre giorni a Londra con Alice. Poca spesa tanta resa e speriamo di non trovare brutto tempo.",
    budget: 800,
  },
  {
    name: "Londra",
    from: new Date("25 Mar 2022"),
    to: new Date("28 Mar 2022"),
    description:
      "Viaggio a Lndn. Parto per tre giorni a Londra con Alice. Poca spesa tanta resa e speriamo di non trovare brutto tempo.",
    budget: 800,
  },
  {
    name: "Londra",
    from: new Date("25 Mar 2022"),
    to: new Date("28 Mar 2022"),
    description:
      "Viaggio a Lndn. Parto per tre giorni a Londra con Alice. Poca spesa tanta resa e speriamo di non trovare brutto tempo.",
    budget: 800,
  },
  {
    name: "Londra",
    from: new Date("25 Mar 2022"),
    to: new Date("28 Mar 2022"),
    description:
      "Viaggio a Lndn. Parto per tre giorni a Londra con Alice. Poca spesa tanta resa e speriamo di non trovare brutto tempo.",
    budget: 800,
  },
  {
    name: "Londra",
    from: new Date("25 Mar 2022"),
    to: new Date("28 Mar 2022"),
    description:
      "Viaggio a Lndn. Parto per tre giorni a Londra con Alice. Poca spesa tanta resa e speriamo di non trovare brutto tempo.",
    budget: 800,
  },
  {
    name: "Londra",
    from: new Date("25 Mar 2022"),
    to: new Date("28 Mar 2022"),
    description:
      "Viaggio a Lndn. Parto per tre giorni a Londra con Alice. Poca spesa tanta resa e speriamo di non trovare brutto tempo.",
    budget: 800,
  },
  {
    name: "Londra",
    from: new Date("25 Mar 2022"),
    to: new Date("28 Mar 2022"),
    description:
      "Viaggio a Lndn. Parto per tre giorni a Londra con Alice. Poca spesa tanta resa e speriamo di non trovare brutto tempo.",
    budget: 800,
  },
  {
    name: "Londra",
    from: new Date("25 Mar 2022"),
    to: new Date("28 Mar 2022"),
    description:
      "Viaggio a Lndn. Parto per tre giorni a Londra con Alice. Poca spesa tanta resa e speriamo di non trovare brutto tempo.",
    budget: 800,
  },
];

export const MainLayout: React.FC = () => {
  return (
    <div className="w-full h-screen min-h-screen flex">
      <Navbar />
      <Sidebar menuItems={cards} />
      <div className="w-full flex flex-col">
        <div className="w-full h-min overflow-auto pt-28 pb-20 px-10">
          <TravelCore cardInfo={cards[0]} />
        </div>
      </div>
    </div>
  );
};
