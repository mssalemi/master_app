import React, { useState, useEffect } from "react";
import { getSession, commitSession } from "~/session.server";

import type { MetaFunction } from "@remix-run/node";
import { json, ActionFunction, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { OneRepCalculator } from "../components/Calculator/components/OneRepCalculator";
import { FormulaExplorer } from "../components/Calculator/FormulaExplorer";

import { FORMULAS, FormulaType } from "~/components/Calculator/types";

export const action: ActionFunction = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  console.log("sesh", session);
  const formData = await request.formData();
  const formulaTypeKey = formData.get("formulaType");
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
  const formula = FORMULAS.find((f) => f.type === formulaType)!;
  if (!formula) {
    return json({ error: "Formula not found" }, { status: 400 });
  }
  const estimatedMax = calculatorMax(Number(weight), Number(reps), formula);
  console.log("Estimated Max: ", estimatedMax);
  session.set("oneRepMax", estimatedMax);
  session.set("formulaType", formulaTypeKey);

  return json(
    { ok: true },
    {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    }
  );
};

export const loader: LoaderFunction = async ({ request, response }) => {
  const session = await getSession(request.headers.get("Cookie"));
  const oneRepMax = session.get("oneRepMax");
  const formulaTypeKey = session.get("formulaType");
  const formulaType =
    FORMULAS.find((f) => f.type === formulaTypeKey) || FORMULAS[0];

  return json({ oneRepMax, formulaType }); // Replace with actual data fetching logic
};

const calculatorMax = (
  weight: number,
  reps: number,
  formulaType: FormulaType
) => {
  const formula = formulaType.formula;
  return formula(weight, reps);
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
  const { oneRepMax, formulaType } = useLoaderData();

  const [draftFormulaType, setDraftFormulaType] =
    useState<FormulaType>(formulaType);

  useEffect(() => {
    console.log("oneRepMax", oneRepMax);
    console.log("formulaType used", formulaType);
    console.log("current formulaType (draft)", draftFormulaType);
  }, [oneRepMax, draftFormulaType, formulaType]);

  return (
    <>
      <div className="flex flex-col">
        <div className="">
          <OneRepCalculator
            title={"Calculator your 1RepMax"}
            formulaType={draftFormulaType}
            handleFomulaChange={setDraftFormulaType}
          />
        </div>
      </div>
      <FormulaExplorer />
    </>
  );
}
