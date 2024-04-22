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
    <div className="card w-96 bg-base-100 shadow-xl image-full">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};
