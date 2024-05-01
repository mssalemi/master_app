import type { MetaFunction } from "@remix-run/node";
import AdtechV1 from "../master-components/Adtech/AdtechV1";

import { MainContentV1 } from "../components/MainContent/MainContentV1.js";
import { QuickCalculator } from "../components/QuickCalculator/QuickCalculator.js";
import { PopularPrograms } from "../components/PopularPrograms/PopularPrograms.js";

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
        className="hero min-h-screen bg-base-200"
        // style={{
        //   backgroundImage: `url(${BENCH_PRESS_IMAGE})`,
        // }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center flex flex-col md:px-16 md:py-32">
          <h1 className="text-5xl font-bold mb-4 text-white px-8">
            The workout program you want, the results you need.
          </h1>
          <p className="mb-4 text-md text-white opacity-80 font-light px-16">
            Discover tailor-made strength programs with our workout program
            tracker—perfect for enhancing key lifts and overall power. Start
            with AI-generated powerlifting templates or calculate your 1 rep max
            to customize your training journey using our workout program
            tracker.
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <HeroButton title="Get Started" />
            <HeroButton title="Learn More" />
          </div>
          <div>
            <QuickCalculator />
          </div>
        </div>
      </div>

      <MainContentV1 />
      <div className="divider"></div>
      <AdtechV1>
        <PopularPrograms />
      </AdtechV1>
    </>
  );
}

const HeroButton = ({ title }: { title: string }) => {
  return (
    <button className="btn text-base-100 glass text-secondary rounded-full px-6 py-2">
      {title}
    </button>
  );
};
