"use client";

import React from "react";
import { useState } from "react";
import Demandinput from "../demandinput/page";

export default function Demandform() {
    const [demandInputs, setDemandInputs] = useState([]);
    const [didCounter, setDIdCounter] = useState(0);
  
    const addDemandInput = () => {
      const newDId = didCounter + 1;
      setDemandInputs((prevDemandInputs) => [
        ...prevDemandInputs,
        <Demandinput
          key={newDId}
          id={newDId}
          onRemove={() => removeDemandInput(newDId)}
        />,
      ]);
      setDIdCounter(newDId);
    };
  
    const removeDemandInput = (id) => {
      setDemandInputs((prevDemandInputs) =>
        prevDemandInputs.filter((input) => input.props.id !== id)
      );
    };
  return (
    <div className="flex flex-col items-center w-full">
      <form
        className="flex flex-col items-center w-9/12 transition-all duration-300 ease-in-out bg-zinc-800 rounded-md border-2 border-zinc-700 p-2 pt-6 pb-6 overflow-hidden"
        style={{ height: `calc(${demandInputs.length} * 4.5rem + 5.5rem)` }}
      >
        <h2 className="flex left-2 text-lg pb-2 text-[30px]">Demands</h2>
        {demandInputs.map((demandInput, index) => (
          <div
            key={demandInput.props.id}
            className="fade-in-button relative flex flex-col-3 w-full transition-all duration-300 ease-in-out"
          >
            <div className=" w-16 h-14 justify-center text-center bg-zinc-600 text-white text-[30px] pt-1 rounded-md border-2 border-zinc-500 m-2">
              {index + 1}
            </div>
            {demandInput}
            <button
              className="bg-red-500 m-2 w-20 h-14 text-white p-2 rounded-md border-2 border-red-300"
              onClick={demandInput.props.onRemove}
            >
              Remove
            </button>
          </div>
        ))}
      </form>
      <button
        className="relative top-[-20px] bg-zinc-600 p-3 rounded-md border-2 border-zinc-200"
        onClick={addDemandInput}
      >
        New demand
      </button>
    </div>
  );
}
