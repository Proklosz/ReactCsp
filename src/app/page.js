"use client";

import { useState, useEffect, useRef } from "react";
import React from "react";
import Stockform from "./components/stocksform/page";
import Demandform from "./components/demandform/page";
import BG from "./components/backgroung/page";
import Createresults from "./components/results/page";
import Description from "./components/description/page";

export default function App() {
  const [Results, setResults] = useState([]);
  const [inputdata, setinputdata] = useState([]);
  const [calcclicked, setcalcclicked] = useState(false);
  const [wrongdata, setwrongdata] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setcalcclicked(true);
    setwrongdata(false);
    console.log(calcclicked);
    setTimeout(() => {
      const R = document.getElementById("results");
      if (R) {
        R.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);

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
        data[2].sort((a, b) => a - b);
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
      // const response = await fetch("https://lp.hogye.dev/api/run_Script", {
      const response = await fetch("http://localhost:8001/api/run_Script", {
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
        
        setResults(responseData);
        setinputdata(data);
        setcalcclicked(false);

        console.log(calcclicked);
        setTimeout(() => {
          const R = document.getElementById("results");
          if (R) {
            R.scrollIntoView({ behavior: "smooth" });
          }
        }, 300);

        console.log("result generated successfully");
      } else {
        console.error("Failed to send data");
        setcalcclicked(false);
        console.log(calcclicked);
        setwrongdata(true);
      }
    } catch (error) {
      console.error("Error sending data:", error);
      setcalcclicked(false);
      console.log(calcclicked);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center max-w-screen overflow-x-hidden min-h-screen z-10 ">
      <div className="w-full h-full flex flex-col items-center justify-center   z-20">
        <Description />
        <Stockform />
        <Demandform />

        <button
          type="submit"
          className="relative w-[300px] items-center bg-zinc-600 active:bg-green-700 p-3 rounded-md border-2 border-zinc-200 mb-4"
          onClick={handleSubmit}
        >
          Calculate cutting plan
        </button>
        <Createresults
          response={Results}
          inputdata={inputdata}
          clicked={calcclicked}
          wrongdata={wrongdata}
        />
      </div>
      <BG />
    </div>
  );
}
