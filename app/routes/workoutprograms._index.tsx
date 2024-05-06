import type { MetaFunction } from "@remix-run/node";
import { WORKOUT_PROGRAMS_EXAMPLE } from "../lib/mehdi_bench_template";

export const meta: MetaFunction = () => {
  return [
    { title: "Workout Programs" },
    {
      name: "description",
      content:
        "Browse all different workouts plans, and find one tailored to your goals!",
    },
  ];
};

export default function WorkoutProgramsPage() {
  console.log(WORKOUT_PROGRAMS_EXAMPLE);
  return <>WorkoutProgramsIndex</>;
}
