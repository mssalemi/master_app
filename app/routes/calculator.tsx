import type { MetaFunction } from "@remix-run/node";
import { json, ActionFunction } from "@remix-run/node";

import { Calculator } from "../components/Calculator/Calculator";
import { FormulaExplorer } from "../components/Calculator/FormulaExplorer";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const formulaType = formData.get("formulaType");
  const weight = formData.get("weight");
  const reps = formData.get("reps");
  console.log("Formula Type Received:", formulaType);
  console.log("Weight Received:", weight);
  console.log("Reps Received:", reps);
  console.log("Units received:", formData.get("units") == "on" ? "lbs" : "kgs");
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
  return (
    <>
      <Calculator />
      <FormulaExplorer />
    </>
  );
}
