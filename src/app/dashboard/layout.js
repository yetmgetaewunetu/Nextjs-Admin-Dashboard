import React from "react";
import Navbar from "../ui/dashboard/navbar/navbar";
import Sidebar from "../ui/dashboard/sidebar/sidebar";
import "../globals.css";

export default function layout({ children }) {
  return (
    <div className="flex">
      <Sidebar />

      <div className="p-5 flex-grow-1 w-3/4">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
