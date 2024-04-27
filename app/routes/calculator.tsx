import type { MetaFunction } from "@remix-run/node";

import { Calculator } from "../components/Calculator/Calculator";
import { FormulaExplorer } from "../components/Calculator/FormulaExplorer";
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
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${BENCH_PRESS_IMAGE})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="py-32 hero-content text-center flex justify-between">
          <Calculator />
        </div>
      </div>
      <FormulaExplorer />
    </>
  );
}
