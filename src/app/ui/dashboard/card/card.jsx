import React from "react";
import { MdSupervisedUserCircle } from "react-icons/md";

export default function Card() {
  return (
    <div className="flex gap-4 -bg--bgSoft hover:-bg--bgLight cursor-pointer w-full rounded-lg p-2">
      <MdSupervisedUserCircle size={24} />
      <div className="flex flex-col gap-2">
        <span className=" -text--text text-md">Total Users</span>
        <span className=" text-2xl font-bold">12.345</span>
        <span>
          <span className=" text-green-500 text-sm">12%</span> more than
          previous week
        </span>
      </div>
    </div>
  );
}
