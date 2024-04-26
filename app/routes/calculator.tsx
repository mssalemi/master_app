import type { MetaFunction } from "@remix-run/node";

import { Calculator } from "../components/Calculator/Calculator";

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
      <div className="hero min-h-screen bg-base-200 py-8">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
}
