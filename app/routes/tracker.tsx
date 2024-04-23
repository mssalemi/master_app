import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Workout Tracker" },
    {
      name: "description",
      content:
        "Track your workouts and programs with this simple and easy to use workout tracker.",
    },
  ];
};

export default function TrackerPage() {
  return <>Tracker</>;
}
