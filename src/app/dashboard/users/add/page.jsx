import { addUser } from "@/app/lib/actions";
import React from "react";

export default function page() {
  return (
    <div className="mt-6 -bg--bgSoft p-6">
      <form action={addUser} className=" text-white">
        <div className=" grid grid-cols-2 gap-4 mb-4">
          <input
            className=" border-gray-600 border outline-none w-full rounded-md p-3 -bg--bg "
            type="text"
            name="username"
            placeholder="username"
            required
          />
          <input
            className=" border-gray-600 border outline-none w-full rounded-md p-3 -bg--bg "
            type="text"
            placeholder="email"
            name="email"
            required
          />
          <input
            className=" border-gray-600 border outline-none w-full rounded-md p-3 -bg--bg "
            type="text"
            placeholder="password"
            name="password"
            required
          />
          <input
            className=" border-gray-600 border outline-none w-full rounded-md p-3 -bg--bg "
            type="text"
            placeholder="phone"
            name="phone"
          />
          <select
            className=" border-gray-600 border outline-none w-full rounded-md p-3  outline-none  -bg--bg"
            name="isAdmin"
            id="cat"
            defaultValue={false}
          >
            <option className=" -bg--bgSoft" value="general">
              is Admin?
            </option>
            <option className=" -bg--bgSoft" value="true">
              True
            </option>
            <option className=" -bg--bgSoft" value="false">
              False
            </option>
          </select>
          <select
            className=" border-gray-600 border outline-none w-full rounded-md p-3 -bg--bg"
            name="isActive"
            id="cat"
            defaultValue={true}
          >
            <option className=" -bg--bgSoft" value="general">
              is Active?
            </option>
            <option className=" -bg--bgSoft" value="true">
              True
            </option>
            <option className=" -bg--bgSoft" value="false">
              False
            </option>
          </select>
        </div>
        <textarea
          className=" border-gray-600 border outline-none w-full m-auto block rounded-md p-3 -bg--bg "
          name="description"
          rows={6}
          id="desc"
          placeholder="address"
        ></textarea>
        <button
          type="submit"
          className=" -text--text bg-teal-700  w-full mt-3 p-3 hover:opacity-85"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
