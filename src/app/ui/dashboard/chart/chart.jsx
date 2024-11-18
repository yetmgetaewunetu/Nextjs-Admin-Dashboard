"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "Mon",
    visit: 2800,
    click: 2000,
  },
  {
    name: "Tue",
    visit: 1800,
    click: 3000,
  },
  {
    name: "Wed",
    visit: 2200,
    click: 2500,
  },
  {
    name: "Thu",
    visit: 3800,
    click: 4000,
  },
  {
    name: "Fri",
    visit: 2000,
    click: 3000,
  },
  {
    name: "Sat",
    visit: 3000,
    click: 3000,
  },
  {
    name: "Sun",
    visit: 3800,
    click: 4700,
  },
];
export default function Chart() {
  return (
    <div style={{ height: "450px" }} className=" -bg--bgSoft p-4 rounded-md">
      <h2 className=" text-2xl -text--textSoft mb-5">Weekly Recap</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{ background: "black", border: "none" }} />
          <Legend />
          <Line
            type="monotone"
            dataKey="visit"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="click" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
