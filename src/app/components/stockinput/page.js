"use client";

import React from "react";

export default function Stockinput() {
  return (
    <div className="fade-in-button overflow-x-hidden w-[95%] h-14 flex flex-col-3 transition-all duration-300 ease-in-out justify-center bg-zinc-600 text-white p-2 rounded-md border-2 border-zinc-500 mt-2 mb-2">
      
      <div className="flex flex-col-2">
        <label className=" w-[50%] inline-flex relative items-center max-text-[20px]">
          Stock length :
        </label>
        <input
          className=" w-[50%] relative text-black rounded-md border-2 border-zinc-700 pl-1"
          type="number"
          step={1}
        />
      </div>

      <div className="flex flex-col-2">
        <label className="w-[50%] inline-flex relative ml-4 items-center max-text-[20px]">
          Stock quantity :
        </label>
        <input
          className="relative w-[50%] text-black rounded-md border-2 border-zinc-700 pl-1"
          type="number"
          step={1}
        />
      </div>
    </div>
  );
}
