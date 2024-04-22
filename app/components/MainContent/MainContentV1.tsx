import React from "react";

const CONTENT_IMG_URL =
  "https://i.postimg.cc/G2H9Qhwc/max-rep-tracker-clipboard-icon.png";

const DEFAULT_DESCRIPTION =
  "Ready to elevate your fitness journey? Explore tailored workout programs, track your progress, and smash your goals with MaxRep Tracker. Let's get stronger, together!";

const BUTTON_TEXT = "Find My Program";

const DEFAULT_SUB_DESCRIPTION = "Our Favorites!";

export function MainContentV1() {
  return (
    <>
      <div className="flex justify-center items-center p-4">
        <div>
          <figure className="hidden sm:block">
            <img
              src={CONTENT_IMG_URL}
              alt="Clipboard reading MAP REP Tracker"
            />
          </figure>
        </div>
        <div className="card-body">
          <h2 className="card-title">Tailored workout programs!</h2>

          <Description />
          <SubDescription />
          <div className="card-actions justify-end">
            <button className="btn btn-tertiary">{BUTTON_TEXT}</button>
          </div>
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
      <p className="">{DEFAULT_SUB_DESCRIPTION}</p>
      <ul className="text-sm px-2">
        {LINKS.map((link) => (
          <li key={link.text} className="my-2">
            <a
              href={link.href}
              className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

const Description = () => {
  return <p>{DEFAULT_DESCRIPTION}</p>;
};
