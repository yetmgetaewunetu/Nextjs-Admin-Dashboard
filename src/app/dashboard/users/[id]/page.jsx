import { getUser, updateUser } from "@/app/lib/actions";
import Image from "next/image";
import React from "react";

async function SingleUserViewPage({ params }) {
  const { id } = params;
  const user = await getUser(id);
  // console.log(user);
  return (
    <div className="flex gap-6 mt-5 p-3 ">
      <div
        style={{ flex: 1 }}
        className=" flex flex-col h-max -bg--bgSoft p-3 rounded-md text-xl text-center"
      >
        <div className=" w-full h-80 relative">
          <Image src={user.img || "/avatar.png"} alt="img" fill />
        </div>
        {user.username}
      </div>
      <form
        action={updateUser}
        style={{ flex: 2 }}
        className="-bg--bgSoft p-3 rounded-md flex flex-col gap-4 mb-4"
      >
        <input type="text" className=" hidden" name="id" value={user.id} />
        <input
          className=" border-gray-600 border outline-none w-full rounded-md p-3 -bg--bg "
          type="text"
          placeholder={user.username}
          name="username"
        />
        <input
          className=" border-gray-600 border outline-none w-full rounded-md p-3 -bg--bg "
          type="text"
          placeholder={user.email}
          name="email"
        />
        <input
          className=" border-gray-600 border outline-none w-full rounded-md p-3 -bg--bg "
          type="text"
          placeholder={"new password"}
          name="password"
        />
        <input
          className=" border-gray-600 border outline-none w-full rounded-md p-3 -bg--bg "
          type="text"
          placeholder={user.phone}
          name="phone"
        />
        <select
          className=" border-gray-600 border w-full rounded-md p-3  outline-none  -bg--bg"
          name="isAdmin"
          id="cat"
        >
          <option className=" -bg--bgSoft" value={false}>
            is Admin?
          </option>
          <option className=" -bg--bgSoft" value={true}>
            Yes
          </option>
          <option className=" -bg--bgSoft" value={false}>
            No
          </option>
        </select>
        <select
          className=" border-gray-600 border outline-none w-full rounded-md p-3 -bg--bg"
          name="isActive"
          id="cat"
        >
          <option className=" -bg--bgSoft" value={true}>
            is Active?
          </option>
          <option className=" -bg--bgSoft" value={true}>
            Yes
          </option>
          <option className=" -bg--bgSoft" value={false}>
            NO
          </option>
        </select>
        <input
          className=" border-gray-600 border outline-none w-full rounded-md p-3 -bg--bg "
          type="text"
          placeholder={user.address}
          name="address"
        />
        <button
          type="submit"
          className=" -text--text bg-teal-700  w-full mt-3 p-3 hover:opacity-85"
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default SingleUserViewPage;
