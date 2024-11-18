import React from "react";
import { MdExitToApp, MdMore, MdPlayCircleFilled } from "react-icons/md";

export default function RightBar() {
  return (
    <div
      className=" sticky"
      style={{
        flex: 1,
      }}
    >
      <div className=" -bg--bgLight  my-6 flex flex-col gap-3 p-2 rounded-lg ">
        <h3>🔥Available Now</h3>
        <h2 className=" font-bold ">
          How to Use the new version of admin Dashboard?
        </h2>
        <p className="  -text--textSoft">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia,
          labore! Veniam laborum voluptates facilis a dolorum fugit corrupti.
          Officia fugiat repudiandae accusantium, illo hic illum molestias
          exercitationem nulla molestiae mollitia!
        </p>
        <button
          className=" flex items-center font-bold bg-blue-600 rounded-md p-2"
          style={{ width: " max-content" }}
        >
          <span className=" text-2xl text-white">
            <MdPlayCircleFilled />
          </span>
          Watch Now
        </button>
      </div>
      <div className=" -bg--bgLight my-6 flex flex-col gap-3 p-2 rounded-lg ">
        <h3>Coming Soon...</h3>
        <h2 className=" font-bold ">How to update your admin Dashboard?</h2>
        <p className="  -text--textSoft">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia,
          labore! Veniam laborum voluptates facilis a dolorum fugit corrupti.
          Officia fugiat repudiandae accusantium, illo hic illum molestias
          exercitationem nulla molestiae mollitia!
        </p>
        <button
          className=" flex items-center bg-blue-600 font-bold rounded-md p-2"
          style={{ width: " max-content" }}
        >
          <span className=" text-2xl text-white">
            <MdExitToApp />
          </span>
          Learn More
        </button>
      </div>
    </div>
  );
}
