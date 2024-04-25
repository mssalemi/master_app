import React from "react";

const CONTENT_IMG_URL =
  "https://i.postimg.cc/G2H9Qhwc/max-rep-tracker-clipboard-icon.png";

const CONTENT_IMG_URL_transparent =
  "https://i.postimg.cc/WbwyNcKb/max-rep-tracker-clipboard-icon-removebg-preview.png";

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
        <div>
          <figure className="hidden sm:block">
            <img
              src={CONTENT_IMG_URL_transparent}
              alt="Clipboard reading MAP REP Tracker"
            />
          </figure>
        </div>
        <div className="card-body">
          <h2 className="card-title">Tailored workout programs!</h2>

          <Description />
          <SubDescription />
          <div className="card-actions justify-end">
            <button className="btn btn-tertiary">{GET_STARTED}</button>
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
      <div className="badge badge-neutral text-lg">
        {DEFAULT_SUB_DESCRIPTION}
      </div>
      <ul className="text-sm px-2">
        <>
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Workout Program</th>
                  <th>Number of Weeks</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}

                {LINKS.map(({ text, href }) => {
                  return (
                    <tr key={text}>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src={STRENGTH_WORKOUT_ICON_URL}
                                alt="Strength Workout Icon"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{text}</div>
                            <div className="text-sm opacity-50">USA</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p>5</p>
                      </td>
                      <td>Powerlifting</td>
                      <th>
                        <a href={href} className="btn btn-ghost btn-xs">
                          details
                        </a>
                      </th>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      </ul>
    </>
  );
};

const Description = () => {
  return <p className="text-gray-700 text-lg mb-4">{DEFAULT_DESCRIPTION}</p>;
};
