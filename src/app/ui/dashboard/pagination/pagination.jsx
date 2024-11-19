"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function Pagination({ count }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const page = searchParams.get("page") || 1;
  const params = new URLSearchParams(pathname);
  const ITEMS_PER_PAGE = 2;

  const hasPrev = ITEMS_PER_PAGE * (parseInt(page) - 1) > 0;
  const hasNext =
    ITEMS_PER_PAGE * (parseInt(page) - 1) + ITEMS_PER_PAGE < count;
  const handlePage = (type) => {
    type === "prev"
      ? params.set("page", parseInt(page) - 1)
      : params.set("page", parseInt(page) + 1);
    replace(`${pathname}?${params}`);
  };

  return (
    <div className=" flex justify-between p-6 ">
      <button
        onClick={() => {
          handlePage("prev");
        }}
        disabled={!hasPrev}
        className=" bg-white text-black px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-md hover:shadow-lg hover:shadow-white disabled:hover:shadow-none"
      >
        Previous
      </button>
      <button
        onClick={() => {
          handlePage("next");
        }}
        disabled={!hasNext}
        className=" bg-white disabled:cursor-not-allowed disabled:opacity-50 text-black px-4 py-2 rounded-md hover:shadow-lg hover:shadow-white disabled:hover:shadow-none"
      >
        Next
      </button>
    </div>
  );
}
