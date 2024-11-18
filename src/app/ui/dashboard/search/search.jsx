"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { MdSearch } from "react-icons/md";

function Search({ placeholder }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const handleSearch = (e) => {
    const params = new URLSearchParams(searchParams);
    if (e.target.value) {
      e.target.value.length > 2 && params.set("q", e.target.value);
    } else {
      params.delete("q");
    }
    replace(`${pathname}?${params}`);
  };
  return (
    <div>
      <div className="flex -bg--bgLight rounded-lg p-2 items-center gap-3">
        <MdSearch size={20} />
        <input
          className=" bg-transparent text-white border-0 outline-0"
          type="text"
          onChange={handleSearch}
        />
      </div>
    </div>
  );
}

export default Search;
