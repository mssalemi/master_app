import type { MetaFunction } from "@remix-run/node";

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
  return <>WorkoutPrograms</>;
}
