"use client";

import React from "react";
import { useState } from "react";
import Stockinput from "../stockinput/page";

export default function Stockform({onChange}) {
  const [stockInputs, setStockInputs] = useState([]);
  const [idCounter, setIdCounter] = useState(0);

  const addStockInput = () => {
    const newId = idCounter + 1;
    setStockInputs((prevStockInputs) => [
      ...prevStockInputs,
      <Stockinput
        key={newId}
        id={newId}
        onRemove={() => removeStockInput(newId)}
      />,
    ]);
    setIdCounter(newId);
  };

  const removeStockInput = (id) => {
    setTimeout(() => {
      console.log('TimeoutLog!')
      setStockInputs((prevStockInputs) =>
        prevStockInputs.filter((input) => input.props.id !== id)
      );
    }, 1000);
  };



  return(
    <div className="flex flex-col items-center w-full">
        <form
        className="flex flex-col items-center w-9/12 transition-all duration-300 ease-in-out bg-zinc-800 rounded-md border-2 border-zinc-700 p-2 pt-6 overflow-hidden"
        style={{ height: `calc(${stockInputs.length} * 4.5rem + 10rem)` }}
      >
        <h2 className="flex left-2 text-lg pb-2 text-[30px] ">Stocks</h2>
        <div className=" relative top-0 box-border h-14 overflow-visible w-2/3 flex flex-col-3 justify-center bg-zinc-600 text-white p-2 rounded-md border-2 border-zinc-500 mt-2 mb-2">
          <div className="flex flex-col-2">
            <label className=" w-[100%] inline-flex relative items-center text-[20px]">
              Knife width :
            </label>
            <input
              className=" w-[100%] relative text-black rounded-md border-2 border-zinc-700 p-1"
              type="number"
              step={1}
            />
          </div>
        </div>
        {stockInputs.map((stockInput, index) => (
          <div
            key={stockInput.props.id}
            className="fade-in-button relative flex flex-col-3 w-full top-0 transition-all duration-300 ease-in-out"
          >
            <div className="flex w-16 h-14 justify-center text-center text-[30px] pt-1 bg-zinc-600 text-zinc-300 rounded-md border-2 border-zinc-500 m-2">
              {index + 1}
            </div>
            {stockInput}
            <button
              className="bg-red-500 m-2 w-20 h-14 text-white p-2 rounded-md border-2 border-red-300"
              onClick={stockInput.props.onRemove}
            >
              Remove
            </button>
          </div>
        ))}
      </form>
      <button
        className="relative top-[-20px] bg-zinc-600 p-3 rounded-md border-2 border-zinc-200 z-10"
        onClick={addStockInput}
      >
        New stock
      </button>
    </div>
  )
}
