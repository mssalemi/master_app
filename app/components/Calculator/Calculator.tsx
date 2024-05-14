import React, { useState } from "react";
import { ResultsCard, RepMaxesTable, OneRepCalculator } from "./components";

const defaultDesc =
  "This is using the EPLEY Formula. Enter your weight and reps to calculate your 1RM.";

export const Calculator = () => {
  const displayRepMaxPercentages = true;
  return (
    <>
      <div className="flex flex-col">
        <div className="stats">
          <OneRepCalculator
            title={"Calculator your 1RepMax"}
            description={defaultDesc}
            buttonTitle={"Calculator"}
            handleSubmit={(e) => {
              e.preventDefault();
              console.log("hey");
            }}
          />
        </div>
      </div>
    </>
  );
};
