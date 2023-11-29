"use client";

import { useState, useEffect, useRef } from "react";
import React from "react";
import Stockform from "../components/stocksform/page";
import Demandform from "../components/demandform/page";

export default function App() {
  const [stockFormData, setStockFormData] = useState({});
  const [demandFormData, setDemandFormData] = useState({});

  const handleStockFormChange = (data) => {
    setStockFormData(data);
  };

  const handleDemandFormChange = (data) => {
    setDemandFormData(data);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Combine both form data
    const combinedFormData = {
      demand: demandFormData,
      stock: stockFormData,
    };

    // Now you can send combinedFormData to your backend API
    console.log(combinedFormData);
  };

  return (
    <div className="flex flex-col items-center justify-center max-w-screen overflow-x-hidden min-h-screen ">
      <Stockform onValueChange={handleStockFormChange} />
      <Demandform onValueChange={handleDemandFormChange} />

      <button
        className="relative bg-zinc-600 p-3 rounded-md border-2 border-zinc-200 mb-4"
        onClick={handleSubmit}
      >
        Create cutting plan
      </button>
    </div>
  );
}
