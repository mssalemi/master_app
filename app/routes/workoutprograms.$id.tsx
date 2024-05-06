import { WorkoutProgramInfo } from "../components/WorkoutProgram/Info";
import React from "react";

function WorkoutProgramPage() {
  return (
    <Layout>
      <h2>Workout Program Individual Page</h2>
      <WorkoutProgramInfo />
    </Layout>
  );
}

export default WorkoutProgramPage;

const Layout = ({ children }) => {
  return <div className="flex flex-col px-16 py-8">{children}</div>;
};
