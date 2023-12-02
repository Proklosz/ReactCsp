"use client";

import { useState, useEffect, useRef } from "react";
import React from "react";
import Stockform from "../components/stocksform/page";
import Demandform from "../components/demandform/page";
import BG from "../components/backgroung/page";
import Createresults from "../components/results/page";

export default function App() {
  

  const [Results, setResults] = useState([]);
  const [inputdata, setinputdata] = useState([]);

  
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = [[], [], [], [], []];

    const kerf = document.getElementById("kerf");
    if (kerf && kerf.value) {
      data[4].push(kerf.value);
    } else {
      data[4].push("0");
    }

    for (let i = 0; i < 1000; i++) {
      const demandLength = document.getElementById("demandLength" + i);
      if (demandLength) {
        data[0].push(demandLength.value);
      }
      const demandQuantity = document.getElementById("demandQuantity" + i);
      if (demandQuantity) {
        data[1].push(demandQuantity.value);
      }
      const stockLength = document.getElementById("stockLength" + i);
      if (stockLength) {
        data[2].push(stockLength.value);
      }
      const stockQuantity = document.getElementById("stockQuantity" + i);
      if (stockQuantity && stockQuantity.value) {
        data[3].push(stockQuantity.value);
      } else if (stockQuantity) {
        data[3].push("0");
      }
    }

    console.log(data);

    try {
      const response = await fetch("https://lp.hogye.dev/api/run_Script", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      console.log("Response Data:", responseData);

      if (response.ok) {
        console.log("Data sent successfully");
        setResults(responseData)
        setinputdata(data)
        setTimeout(() => {
          const R = document.getElementById("results")
        R.scrollIntoView({ behavior: "smooth" })
        }, 300);
        
        
      } else {
        console.error("Failed to send data");
      }
    } catch (error) {
      console.error("Error sending data:", error);
    }

    
  };

  return (
    <div className="flex flex-col items-center justify-center max-w-screen overflow-x-hidden min-h-screen z-10 ">
      <div className="w-full h-full flex flex-col items-center justify-center   z-20">
        <Stockform />
        <Demandform />

        <button
          type="submit"
          className="relative w-1/4 items-center bg-zinc-600 active:bg-green-700 p-3 rounded-md border-2 border-zinc-200 mb-4"
          onClick={handleSubmit}
        >
          Calculate cutting plan
        </button>
        <Createresults response={Results} inputdata={inputdata} />
      </div>
      <BG />
    </div>
  );
}
