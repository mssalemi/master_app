import React from "react";
import { WORKOUT_PROGRAMS_EXAMPLE } from "../../lib/mehdi_bench_template";
import { WeekType, WorkoutProgramTemplateType } from "../../types/types";
import { WeekDisplay } from "./components/WeekDisplay";

import {
  Layout,
  LayoutBody,
  LayoutHeader,
} from "../../master-components/shadcn/layout";

export function WorkoutProgramInfo() {
  const workoutProgram: WorkoutProgramTemplateType =
    WORKOUT_PROGRAMS_EXAMPLE.programTemplate;

  return (
    <div className="flex justify-center p-8">
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
    <div className="max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
        <span className="font-extrabold bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 text-transparent bg-clip-text">
          {programTemplate.title}
        </span>
      </h1>

      <p className="text-lg mb-4">
        <strong>Creator:</strong> {WORKOUT_PROGRAMS_EXAMPLE.creator}
      </p>

      <p className="text-lg mb-4">{programTemplate.description}</p>
      <div className="flex justify-center">
        <div className="stats shadow bg-base-100 md:stats-horizontal stats-vertical">
          <div className="stat">
            <div className="stat-title">Duration</div>
            <div className="stat-value">
              {WORKOUT_PROGRAMS_EXAMPLE.duration}
            </div>
          </div>

          <div className="stat">
            <div className="stat-title">Difficulty</div>
            <div className="stat-value">
              {WORKOUT_PROGRAMS_EXAMPLE.difficulty}
            </div>
          </div>

          <div className="stat">
            <div className="stat-title">Goal</div>
            <div className="stat-value">{WORKOUT_PROGRAMS_EXAMPLE.goal}</div>
          </div>

          <div className="stat">
            <div className="stat-title">Focus Areas</div>
            <div className="stat-value">
              {WORKOUT_PROGRAMS_EXAMPLE.focus.join(", ")}
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-4">
        Why Choose the {programTemplate.title} Program?
      </h2>
      <p className="mt-2">{WORKOUT_PROGRAMS_EXAMPLE.description.whyChoose}</p>

      <h2 className="text-2xl font-bold mt-4">
        Philosophy: {programTemplate.title}
      </h2>
      <p>{WORKOUT_PROGRAMS_EXAMPLE.description.philosophy}</p>

      <h2 className="text-2xl font-bold mt-4">Week Overview:</h2>
      <ul className="list-disc pl-5">
        {WORKOUT_PROGRAMS_EXAMPLE.description.weekOverview.map(
          (item, index) => (
            <li key={index}>
              <strong>{item.title}:</strong> {item.description}
            </li>
          )
        )}
      </ul>

      <p className="mt-4">{WORKOUT_PROGRAMS_EXAMPLE.description.closing}</p>

      <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
        <span className="font-extrabold bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 text-transparent bg-clip-text">
          Program Overview
        </span>
      </h2>

      <h4 className="text-2xl md:text-4xl font-bold tracking-tighter mb-4">
        Weeks
      </h4>
      <div className="flex flex-col">
        {programTemplate.weeks.map((week, index) => (
          <WeekDisplay key={index} week={week} />
        ))}
      </div>
    </div>
  );
}
