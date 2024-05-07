import { WorkoutProgramInfo } from "../components/WorkoutProgram/Info";
import React from "react";

function WorkoutProgramPage() {
  return (
    <Layout>
      <div className="container flex flex py-8">
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
