import React from "react";

import { WORKOUT_PROGRAMS_EXAMPLE } from "../../lib/mehdi_bench_template";

import { WorkoutProgramTemplateType } from "../../types/types";

export function WorkoutProgramInfo() {
  const workoutProgram: WorkoutProgramTemplateType =
    WORKOUT_PROGRAMS_EXAMPLE.programTemplate;

  console.log(workoutProgram);
  return (
    <div>
      <WorkoutProgramTemplateDisplay programTemplate={workoutProgram} />
    </div>
  );
}

function WorkoutProgramTemplateDisplay({
  programTemplate,
}: {
  programTemplate: WorkoutProgramTemplateType;
}) {
  return (
    <div>
      <h1 className="text-4xl font-bold">{programTemplate.title}</h1>
      <p className="text-lg text-gray-600">{programTemplate.description}</p>
      <div className="my-8">
        <h2 className="text-2xl font-bold">Program Details</h2>
        <p>
          <strong>Creator:</strong> {WORKOUT_PROGRAMS_EXAMPLE.creator}
        </p>
        <p>
          <strong>Duration:</strong> {WORKOUT_PROGRAMS_EXAMPLE.duration}
        </p>
        <p>
          <strong>Difficulty:</strong> {WORKOUT_PROGRAMS_EXAMPLE.difficulty}
        </p>
        <p>
          <strong>Goal:</strong> {WORKOUT_PROGRAMS_EXAMPLE.goal}
        </p>
        <p>
          <strong>Focus:</strong>{" "}
          {WORKOUT_PROGRAMS_EXAMPLE.focus.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-bold">Weeks</h2>
      </div>
    </div>
  );
}
