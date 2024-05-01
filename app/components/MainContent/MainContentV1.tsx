import React from "react";

const DEFAULT_DESCRIPTION =
  "Ready to elevate your fitness journey? Explore tailored workout programs, track your progress, and smash your goals with MaxRep Tracker. Let's get stronger, together!";

const GET_STARTED = "Get Started";
const BUTTON_TEXT = "View all Programs";

const DEFAULT_SUB_DESCRIPTION = "FAVORITES";

const STRENGTH_WORKOUT_ICON_URL =
  "https://i.postimg.cc/7Zqp0Z72/dbdd34a9-3f1e-4e79-aa88-2d24001d39a3.webp";

export function MainContentV1() {
  return (
    <>
      <div className="flex justify-center items-center p-4">
        <div className="card-body">
          <h2 className="card-title">Tailored workout programs!</h2>

          <Description />
          {/* <SubDescription /> */}
          {/* <div className="card-actions justify-end">
            <button className="btn btn-tertiary">{GET_STARTED}</button>
            <button className="btn btn-tertiary">{BUTTON_TEXT}</button>
          </div> */}
        </div>
      </div>
    </>
  );
}

const SubDescription = () => {
  const LINKS = [
    {
      text: "AI Generated",
      href: "/",
    },
    { text: "Wendler 5/3/1", href: "/" },
    { text: "MedxMan's Candito 5 Week", href: "/" },
    { text: "The Rippler", href: "/" },
    { text: "Custom", href: "/" },
  ];

  return (
    <>
      <div className="badge badge-neutral text-lg py-2 ">
        {DEFAULT_SUB_DESCRIPTION}
      </div>
      <>
        <div className="flex"></div>
      </>
    </>
  );
};

const Description = () => {
  return <p className="text-gray-700 text-lg mb-4">{DEFAULT_DESCRIPTION}</p>;
};
