import React from "react";
import Card from "../ui/dashboard/card/card";
import Transactions from "../ui/dashboard/transactions/transactions";
import Chart from "../ui/dashboard/chart/chart";
import RightBar from "../ui/dashboard/rightBar/rightBar";
import { fetchData } from "../lib/data";

export default async function page() {
  return (
    <div className="flex mt-4  gap-5">
      <div className="flex flex-col gap-5" style={{ flex: 3 }}>
        <div className="flex flex-grow justify-between gap-3">
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <RightBar />
    </div>
  );
}
