import { Link } from "@remix-run/react";
import { WorkoutProgramInfo } from "../components/WorkoutProgram/Info";
import React from "react";

function WorkoutProgramPage() {
  return (
    <Layout>
      <div className="container flex flex-col py-8">
        <Link to="/workoutprograms" className="text-blue-500">
          <span className="ml-2">All Workout Programs</span>
        </Link>
        <div className="flex flex-col space-y-4 p-4">
          <WorkoutProgramInfo />
        </div>
      </div>
    </Layout>
  );
}

export default WorkoutProgramPage;

const Layout = ({ children }) => {
  return <div className="flex flex-col px-16 py-8">{children}</div>;
};
