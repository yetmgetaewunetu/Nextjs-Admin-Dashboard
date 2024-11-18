import React from "react";

export default function Pagination() {
  return (
    <div className=" flex justify-between p-6 ">
      <button className=" bg-white text-black px-4 py-2 rounded-md hover:opacity-85">
        Previous
      </button>
      <button className=" bg-white text-black px-4 py-2 rounded-md hover:opacity-85">
        Next
      </button>
    </div>
  );
}
