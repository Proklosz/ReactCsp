"use client";

import { useState, useEffect, useRef } from "react";
import React from "react";
import Stockform from "./components/stocksform/page";
import Demandform from "./components/demandform/page";


export default function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  
  
  

  

  return (
    <div className="flex flex-col items-center justify-center max-w-screen overflow-x-hidden min-h-screen ">
      <Stockform />
      <Demandform />

      

      <button
        className="relative bg-zinc-600 p-3 rounded-md border-2 border-zinc-200 mb-4"
        onClick={handleSubmit}
      >
        Create cutting plan
      </button>
    </div>
  );
}
