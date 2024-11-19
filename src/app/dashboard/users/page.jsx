import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import Link from "next/link";
import React from "react";
import { FaUser } from "react-icons/fa";
import Image from "next/image";
import { fetchData } from "@/app/lib/data";
import { searchParams } from "next/navigation";
import { deleteUser } from "@/app/lib/actions";

export default async function page({ searchParams }) {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, users } = await fetchData(q, page);
  // console.log(users);
  return (
    <div className=" flex-grow -bg--bgSoft mt-6 p-6 rounded-md">
      <div className="flex justify-between items-center">
        <Search />
        <Link href="/dashboard/users/add">
          <button className=" bg-purple-600 text-white rounded-md p-2">
            Add New
          </button>
        </Link>
      </div>
      <table className=" w-full mt-5">
        <thead>
          <tr>
            <td className=" p-2">Name</td>
            <td className=" p-2">Email</td>
            <td className=" p-2">Created At</td>
            <td className=" p-2">Role</td>
            <td className=" p-2">Status</td>
            <td className=" p-2">Action</td>
          </tr>
        </thead>
        <tbody className=" -text--textSoft">
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td className=" p-1 flex items-center gap-1">
                  <Image
                    className=" rounded-full aspect-square object-cover"
                    src={user.img || "/avatar.png"}
                    width="40"
                    height="40"
                    alt="image"
                  />{" "}
                  {user.username}
                </td>
                <td className="p-1">{user.email}</td>
                <td className="p-1">20.20.2022</td>
                <td className="p-1">{user.isAdmin ? "Admin" : "user"}</td>
                <td className="p-1">{user.isActive ? "online" : "offline"}</td>
                <td className="p-1 flex gap-2">
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className="hover:opacity-85 py-1 font-bold px-4 rounded-md bg-teal-700 text-white ">
                      view
                    </button>
                  </Link>
                  <form action={deleteUser}>
                    <input
                      type="text"
                      name="id"
                      value={user.id}
                      className=" hidden"
                    />
                    <button className="hover:opacity-85 py-1 px-4 font-bold rounded-md bg-red-500 text-white">
                      delete
                    </button>
                  </form>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
}
