import React, { useState } from "react";
import { ResultsCard, RepMaxesTable, OneRepCalculator } from "./components";

const defaultDesc =
  "This is using the EPLEY Formula. Enter your weight and reps to calculate your 1RM.";

export const Calculator = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="">
          <OneRepCalculator
            title={"Calculator your 1RepMax"}
            description={defaultDesc}
          />
        </div>
      </div>
    </>
  );
};
