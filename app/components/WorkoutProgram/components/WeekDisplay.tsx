import { WeekType } from "../../../types/types";
import { IconBuildingFortress } from "@tabler/icons-react";

import { Button } from "../../../master-components/shadcn/button";

interface WorkoutViewProps {
  name: string;
  logo: JSX.Element;
  connected: boolean;
  desc: JSX.Element;
}

export function WeekDisplay({ week }: { week: WeekType }) {
  const workouts: WorkoutViewProps[] = week.days.map((day) => {
    return {
      name: day.title,
      logo: <IconBuildingFortress />,
      connected: false,
      desc: (
        <ul>
          {day.exercises.map((exercise) => (
            <li className="" key={exercise.name}>
              {exercise.name}{" "}
              <span className="font-bold">
                {exercise.sets} x {exercise.reps}
              </span>
              {exercise.percentage1RM && (
                <span>
                  {" "}
                  @{" "}
                  <span className="font-bold">
                    {Math.round(exercise.percentage1RM * 100)}
                    <span className="text-gray-700">%</span>
                  </span>
                </span>
              )}
              {exercise.modifier && (
                <span
                  className={`font-bold ${
                    exercise.modifier < 0 ? "text-red-500" : "text-green-500"
                  }`}
                >
                  {exercise.modifier > 0 ? "+" : ""}
                  {exercise.modifier}
                </span>
              )}
              {}
            </li>
          ))}
        </ul>
      ),
    };
  });

  return (
    <>
      <div>
        <h4 className="text-md md:text-2xl font-bold tracking-tighter mb-4">
          Week {week.week}: {week.title}
        </h4>
        <p className="line-clamp-6">{week.description}</p>
        <ul className="no-scrollbar grid gap-4 overflow-y-scroll pb-16 pt-4 md:grid-cols-2 lg:grid-cols-3">
          {workouts.map((workout) => (
            <WorkoutView
              name={workout.name}
              logo={workout.logo}
              connected={workout.connected}
              desc={workout.desc}
              key={workout.name}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

const WorkoutView = ({ name, logo, connected, desc }: WorkoutViewProps) => {
  return (
    <li key={name} className="rounded-lg border p-4 hover:shadow-md ">
      <div className="mb-4 flex items-center justify-between">
        <div
          className={`flex size-10 items-center justify-center rounded-lg bg-muted`}
        >
          {logo}
        </div>
        <Button
          variant="outline"
          size="sm"
          className={`${
            connected
              ? "border border-blue-300 bg-blue-50 hover:bg-blue-100 dark:border-blue-700 dark:bg-blue-950 dark:hover:bg-blue-900"
              : ""
          }`}
        >
          {connected ? "Connected" : "View"}
        </Button>
      </div>
      <div>
        <h2 className="mb-1 font-semibold text-lg">{name}</h2>
        <p className="line-clamp-6">{desc}</p>
      </div>
    </li>
  );
};
