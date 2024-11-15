"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaUsers, FaUser } from "react-icons/fa";

import {
  MdDashboard,
  MdAttachMoney,
  MdShoppingCart,
  MdWork,
  MdPeople,
  MdHelp,
  MdOutlineAttachMoney,
  MdLogout,
} from "react-icons/md";
import { MdAnalytics, MdOutlineSettings } from "react-icons/md";
const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },

      {
        title: "Users",
        path: "/dashboard/users",
        icon: <FaUsers />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingCart />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdOutlineAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelp />,
      },
    ],
  },
];
export default function Sidebar() {
  const path = usePathname();
  console.log(path);
  return (
    <div className=" w-1/4 p-8 -bg--bgSoft">
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
      {menuItems.map((item) => {
        return (
          <ul key={item.title}>
            <span className=" mb-3 text-md -text--textSoft">{item.title}</span>
            {item.list.map((link) => {
              return (
                <Link
                  href={link.path}
                  className={
                    path === link.path
                      ? " -bg--bgLight my-1  flex gap-3 items-center py-2 rounded-md  px-5 hover:-bg--bgLight transition-all  duration-300"
                      : "flex gap-3 items-center my-1 py-2 rounded-lg  px-5 hover:-bg--bgLight transition-all duration-300"
                  }
                  key={link.title}
                >
                  <span className=" text-xl">{link.icon}</span>{" "}
                  <span>{link.title}</span>
                </Link>
              );
            })}
          </ul>
        );
      })}
      <button className="flex hover:-bg--bgLight p-3 rounded-md items-center gap-2 justify-center">
        <MdLogout size={20} />
        <span className=" text-sm">Logout</span>
      </button>
    </div>
  );
}
