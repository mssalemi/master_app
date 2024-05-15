import React, { useState } from "react";

import type { MetaFunction } from "@remix-run/node";
import { json, ActionFunction } from "@remix-run/node";

import { OneRepCalculator } from "../components/Calculator/components/OneRepCalculator";
import { FormulaExplorer } from "../components/Calculator/FormulaExplorer";

import { FORMULAS, FormulaType } from "~/components/Calculator/types";

const defaultDesc =
  "This is using the EPLEY Formula. Enter your weight and reps to calculate your 1RM.";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const formulaType = formData.get("formulaType");
  const weight = formData.get("weight");
  const reps = formData.get("reps");
  const units = formData.get("units") == "on" ? "lbs" : "kgs";
  const payload = {
    weight: weight,
    reps: reps,
    formulaType: formulaType,
    units: units,
  };
  console.log(payload);
  return json({ success: true });
};

export const meta: MetaFunction = () => {
  return [
    { title: "ONE Rep Max Calculator" },
    { name: "description", content: "Calculator to estimate your rep maxes!" },
  ];
};

const BENCH_PRESS_IMAGE =
  "https://i.postimg.cc/Hs3sQLdK/DALL-E-2024-04-21-20-52-28-A-realistic-gym-setting-featuring-a-bench-press-station-with-a-blue-hue.webp";

export default function CalculatorPage() {
  const [formulaType, setFormulaType] = useState<FormulaType>(FORMULAS[0]);

  return (
    <>
      <div className="flex flex-col">
        <div className="">
          <OneRepCalculator
            title={"Calculator your 1RepMax"}
            formulaType={formulaType}
            handleFomulaChange={setFormulaType}
          />
        </div>
      </div>
      <FormulaExplorer />
    </>
  );
}
