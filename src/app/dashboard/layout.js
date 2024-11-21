import React from "react";
import Navbar from "../ui/dashboard/navbar/navbar";
import Sidebar from "../ui/dashboard/sidebar/sidebar";
import "../globals.css";
import Footer from "../ui/dashboard/footer/footer";
import { auth } from "../auth";

export default async function layout({ children }) {
  return (
    <div className="flex">
      <div style={{ flex: 1 }}>
        <Sidebar />
      </div>

      <div style={{ flex: 4 }} className="p-5 flex flex-col w-3/4">
        <Navbar />
        <div className="flex-grow">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
