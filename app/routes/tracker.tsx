import type { MetaFunction } from "@remix-run/node";
import { Calendar } from "../master-components/Calendar/Calendar";
import { User } from "lucide-react";
import { UserTracker } from "../components/UserTracker/UserTracker";

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
  return (
    <Layout>
      <UserTracker />
    </Layout>
  );
}

const Layout = ({ children }) => {
  return <div className="flex flex-col px-16 py-8">{children}</div>;
};
