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
          <Description />
          <WorkoutProgramsTable />
        </div>
      </div>
    </>
  );
}

const Description = () => {
  return (
    <div className="container flex justify-center flex py-8">
      <div className="flex flex-col items-center space-y-4 text-center p-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
          A{" "}
          <span className="font-extrabold bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 text-transparent bg-clip-text bg-300% animate-gradient">
            Strength Training
          </span>{" "}
          workout program tracker, built for athletes.
        </h1>

        <p className="text-muted-foreground font-bold mt-2">
          Our program tracker is not just a tool—it's your personal training
          companion. Customized to fit the unique needs of athletes, it offers a
          variety of strength training regimes ranging from powerlifting to
          sport-specific conditioning. Whether you're preparing for an upcoming
          season or aiming to improve your personal bests, our tracker adapts to
          your goals, providing structured workouts that evolve as you advance.
          See below for our most popular strength training programs!
        </p>
      </div>
    </div>
  );
};

const WorkoutProgramsTable = () => {
  const headers = ["Workout Program", "Level", "Workouts per Week", ""];
  const items: {
    workoutProgramName: string;
    level: string;
    workoutsPerWeek: string;
    avatarUrl: string;
    author: string;
    country: string;
  }[] = [
    {
      workoutProgramName: "Candito 6 Week Strength Program",
      level: "Intermediate",
      workoutsPerWeek: "4",
      avatarUrl: STRENGTH_WORKOUT_ICON_URL,
      author: "Jonnie Candito",
      country: "United States",
    },
    {
      workoutProgramName: "Rippler Program",
      level: "Advanced",
      workoutsPerWeek: "4",
      avatarUrl: STRENGTH_WORKOUT_ICON_URL,
      author: "GZCL",
      country: "United States",
    },
    {
      workoutProgramName: "Layne Norton's PHAT Program",
      level: "Advanced",
      workoutsPerWeek: "5",
      avatarUrl: STRENGTH_WORKOUT_ICON_URL,
      author: "Layne Norton",
      country: "United States",
    },
    {
      workoutProgramName: "Wendler 5/3/1",
      level: "Beginner",
      workoutsPerWeek: "3",
      avatarUrl: STRENGTH_WORKOUT_ICON_URL,
      author: "Jim Wendler",
      country: "United States",
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {items.map((item, index) => {
            return (
              <>
                <tr key={index}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.avatarUrl}
                            alt="Workout Program Author"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item.author}</div>
                        <div className="text-sm opacity-50">{item.country}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge badge-ghost badge-sm">
                      {item.level}
                    </span>
                  </td>
                  <td>{item.workoutsPerWeek}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
