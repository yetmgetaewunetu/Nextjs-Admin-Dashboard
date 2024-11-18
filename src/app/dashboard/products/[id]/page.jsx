import Image from "next/image";
import React from "react";

function SingleUserViewPage() {
  return (
    <div className="flex gap-6 mt-5 p-3 ">
      <div
        style={{ flex: 1 }}
        className=" flex flex-col h-max -bg--bgSoft p-3 rounded-md text-xl text-center"
      >
        <div className=" w-full h-80 relative">
          <Image src="/avatar.png" alt="img" fill />
        </div>
        John Doe
      </div>
      <form
        style={{ flex: 2 }}
        className="-bg--bgSoft p-3 rounded-md flex flex-col gap-4 mb-4"
      >
        <input
          className=" border-gray-600 border outline-none w-full rounded-md p-3 -bg--bg "
          type="text"
          placeholder="title"
        />
        <select
          className=" border-gray-600 border outline-none w-full rounded-md p-3  outline-none  -bg--bg"
          name="category"
          id="cat"
        >
          <option className=" -bg--bgSoft" value="general">
            Choose a category
          </option>
          <option className=" -bg--bgSoft" value="Electronics">
            Electronics
          </option>
          <option className=" -bg--bgSoft" value="kitchen">
            Kitchen
          </option>
        </select>
        <input
          className=" border-gray-600 border outline-none w-full rounded-md p-3 -bg--bg "
          type="number"
          placeholder="price"
        />
        <input
          className=" border-gray-600 border outline-none w-full rounded-md p-3 -bg--bg "
          type="number"
          placeholder="stock"
        />
        <input
          className=" border-gray-600 border outline-none w-full rounded-md p-3 -bg--bg "
          type="tex"
          placeholder="color"
        />
        <input
          className=" border-gray-600 border outline-none w-full rounded-md p-3 -bg--bg "
          type="text"
          placeholder="size"
        />
        <textarea
          className=" border-gray-600 border outline-none w-full rounded-md p-3 -bg--bg "
          type="text"
          cols={10}
          placeholder="description"
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
