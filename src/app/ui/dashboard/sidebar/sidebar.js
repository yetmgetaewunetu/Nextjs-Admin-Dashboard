import Link from "next/link";
import React from "react";
import { FaUser } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import SideBarContainer from "./SideBarContainer";
import { signOut } from "@/app/auth";

export default function Sidebar() {
  return (
    <div className=" w-full min-h-screen p-8 -bg--bgSoft">
      <div className="mb-7">
        <div className="items-center flex gap-4 text-2xl mb-3">
          <span className=" bg-gray-400 rounded-full p-2">
            <FaUser />
          </span>
          <span className=" capitalize font-bold">username</span>
        </div>
        <span className=" text-lg text-green-500 capitalize">
          Administrator
        </span>
      </div>
      <div>
        <SideBarContainer />
      </div>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button className="flex hover:-bg--bgLight p-3 rounded-md items-center gap-2 justify-center">
          <MdLogout size={20} />
          <span className=" text-sm">Logout</span>
        </button>
      </form>
    </div>
  );
}
