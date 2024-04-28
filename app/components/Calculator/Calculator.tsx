import React, { useState } from "react";
import { ResultsCard, RepMaxesTable, CalculatorCard } from "./components";

const defaultDesc =
  "This is using the EPLEY Formula. Enter your weight and reps to calculate your 1RM.";

export const Calculator = () => {
  const displayRepMaxPercentages = true;
  return (
    <>
      <div className="flex flex-col">
        <div className="stats shadow">
          <CalculatorCard
            title={"Calculator your 1RepMax"}
            description={defaultDesc}
            buttonTitle={"Calculator"}
            handleSubmit={(e) => {
              e.preventDefault();
              console.log("hey");
            }}
          />
        </div>
        {displayRepMaxPercentages && (
          <div className="py-8">
            <div className="card bg-base-100 shadow-xl flex flex-cols items-start p-8">
              <h2 className="card-title py-4">Repetition Maxes</h2>
              <div className="flex flex-rows justify-center">
                <RepMaxesTable />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
