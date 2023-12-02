import React from "react";
import { useRef } from "react";

export default function Createresults({ response, inputdata }) {

  if (response != null && response.result != null) {
    const numericInput = inputdata[2].map(Number);
    const maxInput = Math.max(...numericInput);
    let e = 0
    return (
      <div
        className="flex flex-col items-center w-full "
        id="results"
      >
        <div className=" relative flex flex-col items-center w-9/12 transition-all bg-blur backdrop-blur-[2px] duration-300 ease-in-out rounded-md border-2 border-zinc-700 p-2 pt-6 overflow-hidden">
          <h2 className="flex left-2 text-lg pb-2 text-[35px] ">Results</h2>
          {response.result[0].map((value, index) => {
            if (value != 0) {
                e = e+1
              return (
                <div
                  key={index}
                  className=" relative fade-in-button overflow-x-hidden w-[95%] flex flex-col float-left items-left transition-all duration-300 ease-in-out justify-center bg-zinc-800 text-white p-4 pl-4 pr-4 rounded-md border-2 border-zinc-500 mt-2 "
                >
                    <h2 className="flex left-2 text-lg text-[31px] mb-2">Pattern {e}</h2>
                  <div className=" absolute right-4 top-0 fade-in-button overflow-x-hidden w-auto h-10 flex transition-all duration-300 ease-in-out justify-center  text-white p-2 rounded-md border-2 border-zinc-500 mt-4 mb-2">
                    {response.result[0][index]}x stock:{" "}
                    {response.result[1][index][1]}mm
                  </div>
                   Yield : {response.result[1][index][2] * 100}%
                  <br></br>
                   Trash: 
                  <br></br>
                  <div
                    className={`relative fade-in-button overflow-x-hidden h-14 flex transition-all duration-300 ease-in-out justify-start bg-zinc-600 text-white rounded-md border-2 border-zinc-500 mt-2 mb-2`}
                    style={{
                      width: `calc(${
                        response.result[1][index][1] / maxInput
                      } * 100%`,
                    }}
                  >
                    {response.result[1][index][0].map((item, itemIndex) => {
                      if (item !== 0) {
                        return Array.from({ length: item }).map(
                          (_, repeatIndex) => (
                            <div
                              key={repeatIndex}
                              className={`relative inline-flex items-center text-center justify-center  bg-zinc-900 text-white p-2  border-2 border-zinc-500 rounded-md h-13`}
                              style={{
                                width: `calc(${
                                  inputdata[0][itemIndex] /
                                  response.result[1][index][1]
                                } * 100%)`,
                              }}
                            >
                              {inputdata[0][itemIndex]}mm
                            </div>
                          )
                        );
                      }
                      return null; // Return null for items that are 0
                    })}
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
          <br></br>
          {response.result[2]}
          <br></br>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
