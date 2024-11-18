import React from "react";

export default function page() {
  return (
    <div className="mt-6 -bg--bgSoft p-6">
      <form action="" className=" text-white">
        <div className=" grid grid-cols-2 gap-4 mb-4">
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
        </div>
        <textarea
          className=" border-gray-600 border outline-none w-full m-auto block rounded-md p-3 -bg--bg "
          name="description"
          rows={8}
          id="desc"
          placeholder="Description"
        ></textarea>
        <button
          type="submit"
          className=" -text--text hover:opacity-85 bg-teal-700  w-full mt-3 p-3"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
