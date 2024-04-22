import React from "react";

export function PopularPrograms() {
  const current_popular_programs = [
    {
      title: "Starting Strength",
      description:
        "The Starting Strength program is a strength training program designed by Mark Rippetoe.",
      href: "/",
    },
    {
      title: "Smolov Squat Program",
      description:
        "The Smolov Squat Program is a weightlifting program for increasing squat strength.",
      href: "/",
    },
    {
      title: "Layne Norton's PHAT",
      description:
        "Layne Norton's PHAT program is a hybrid powerbuilding program.",
      href: "/",
    },
  ];
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Popular Programs</h2>
      <ProgramCard />
    </div>
  );
}

const ProgramCard = () => {
  return (
    <div className="card w-1/2 bg-base-100 shadow-xl image-full">
      <figure>
        <img
          src="https://i.postimg.cc/857gB6RB/DALL-E-2024-04-22-07-38-52-Create-a-background-image-in-a-2-3-ratio-showing-a-person-working-out-i.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-2xl font-bold text-900 mb-2">
          6-Week Intro to Bodybuilding
        </h2>
        <p className="text-700 mb-4">
          This program is designed for beginners who want to get started with
          bodybuilding.
        </p>
        <div className="space-y-2 text-600">
          <p>
            <span className="font-semibold">Duration:</span>{" "}
            <strong>6 weeks</strong>
          </p>
          <p>
            <span className="font-semibold">Frequency:</span>{" "}
            <strong>3 days per week</strong>
          </p>
          <p>
            <span className="font-semibold">Equipment:</span>{" "}
            <strong>Barbell, Dumbbell, Bench</strong>
          </p>
          <p>
            <span className="font-semibold">Level:</span>{" "}
            <strong>Beginner</strong>
          </p>
        </div>

        <div className="rating justify-end">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            checked
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-secondary">View Full Program</button>
        </div>
      </div>
    </div>
  );
};
