import type { MetaFunction } from "@remix-run/node";
import AdtechV1 from "../master-components/Adtech/AdtechV1";

import { MainContentV1 } from "../components/MainContent/MainContentV1.js";
import { QuickCalculator } from "../components/QuickCalculator/QuickCalculator.js";
import { PopularPrograms } from "../components/PopularPrograms/PopularPrograms.js";
import { Footer } from "../components/Footer/Footer.js";

export const meta: MetaFunction = () => {
  return [
    { title: "(Strength Training).AI" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const BENCH_PRESS_IMAGE =
  "https://i.postimg.cc/Hs3sQLdK/DALL-E-2024-04-21-20-52-28-A-realistic-gym-setting-featuring-a-bench-press-station-with-a-blue-hue.webp";

const DEFUALT_IMG =
  "https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg";

export default function Index() {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${BENCH_PRESS_IMAGE})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center">
          <div className="">
            <QuickCalculator />
          </div>
        </div>
      </div>

      <MainContentV1 />
      <div className="divider"></div>
      <AdtechV1>
        <PopularPrograms />
      </AdtechV1>

      <Footer />
    </>
  );
}
