"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { MdChat, MdNotifications, MdPublic, MdSearch } from "react-icons/md";

export default function Navbar() {
  const path = usePathname();
  return (
    <div className="flex rounded-lg justify-between gap-10 -bg--bgSoft p-5 flex-1">
      <h3 className=" text-xl -text--textSoft capitalize">
        {path.split("/").pop()}
      </h3>
      <div className="flex gap-5">
        <div className="flex -bg--bgLight rounded-lg p-2 items-center gap-3">
          <MdSearch size={20} />
          <input
            className=" bg-transparent text-white border-0 outline-0"
            type="text"
          />
        </div>
        <div className="flex gap-5 items-center">
          <MdChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
}
