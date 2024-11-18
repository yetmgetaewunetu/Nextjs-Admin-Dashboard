import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import Link from "next/link";
import React from "react";
import { FaCartPlus, FaUser } from "react-icons/fa";

export default function page() {
  return (
    <div className=" flex-grow -bg--bgSoft mt-6 p-6 rounded-md">
      <div className="flex justify-between items-center">
        <Search />
        <Link href="/dashboard/products/add">
          <button className=" bg-purple-600 text-white rounded-md p-2">
            Add New
          </button>
        </Link>
      </div>
      <table className=" w-full mt-5">
        <thead>
          <tr>
            <td className=" p-2">Title</td>
            <td className=" p-2">Description</td>
            <td className=" p-2">Price</td>
            <td className=" p-2">Created At</td>
            <td className=" p-2">Stock</td>
            <td className=" p-2">Action</td>
          </tr>
        </thead>
        <tbody className=" -text--textSoft">
          <tr>
            <td className=" p-1 flex items-center gap-1">
              <FaCartPlus size={30} color="red" /> Iphone{" "}
            </td>
            <td className="p-1">something description</td>
            <td className="p-1">$1000</td>
            <td className="p-1">20.20.2022</td>
            <td className="p-1">200</td>
            <td className="p-1 flex gap-2">
              <Link href="/dashboard/products/test">
                <button
                  className={`hover:opacity-85 py-1 font-bold px-4 rounded-md bg-teal-500 text-white 1`}
                >
                  view
                </button>
              </Link>
              <button className="hover:opacity-85 py-1 px-4 font-bold rounded-md bg-red-500 text-white">
                delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
}
