import { bench_accessory } from "./bench";

import { WorkoutProgramTemplateType } from "../types/types";

export const WORKOUT_PROGRAMS_EXAMPLE: {
  id: string;
  title: string;
  description: string;
  creator: string;
  duration: string;
  difficulty: string;
  goal: string;
  focus: string[];
  programTemplate: WorkoutProgramTemplateType;
} = {
  id: "1",
  title: "Mehdi 5 Week Bench Cycle",
  description:
    "The Candito 6 Week Strength Program is a 6 week training program built using periodization. It is built to help you increase your strength and muscle mass.",
  creator: "Jonnie Candito",
  duration: "6 weeks",
  difficulty: "Intermediate",
  goal: "Strength",
  focus: ["Bench Press"],
  programTemplate: {
    title: "Mehdi 5 Week Bench Cycle",
    description:
      "The Mehdi 5 Week Bench Cycle is a 5 week training program built using periodization. It is built to help you increase your bench press strength and muscle mass.",
    weeks: [
      {
        week: 1,
        title: "The Beginning",
        description: "Reps, reps, and more reps.",
        days: [
          {
            day: 1,
            title: "The Start, Round 1",
            exercises: [
              {
                exercise: "Bench Press",
                sets: 1,
                reps: 10,
                percentage1RM: 0.5,
                rounding: undefined,
              },
              {
                exercise: "Bench Press",
                sets: 1,
                reps: 10,
                percentage1RM: 0.675,
                rounding: undefined,
              },
              {
                exercise: "Bench Press",
                sets: 1,
                reps: 8,
                percentage1RM: 0.7,
                rounding: undefined,
              },
              {
                exercise: "Bench Press",
                sets: 1,
                reps: 6,
                percentage1RM: 0.775,
                rounding: undefined,
              },
            ],
          },
          {
            day: 2,
            title: "The Start, Round 2",
            exercises: [
              {
                exercise: "Bench Press",
                sets: 1,
                reps: 10,
                percentage1RM: 0.5,
                rounding: undefined,
              },
              {
                exercise: "Bench Press",
                sets: 1,
                reps: 10,
                percentage1RM: 0.675,
                rounding: undefined,
              },
              {
                exercise: "Bench Press",
                sets: 1,
                reps: 8,
                percentage1RM: 0.7,
                rounding: undefined,
              },
              {
                exercise: "Bench Press",
                sets: 1,
                reps: 6,
                percentage1RM: 0.775,
                rounding: undefined,
              },
              ...bench_accessory,
            ],
          },
          {
            day: 3,
            title: "Amrap",
            exercises: [
              {
                exercise: "Bench Press",
                sets: 1,
                reps: 15,
                percentage1RM: 0.8,
                rounding: undefined,
              },
              ...bench_accessory,
            ],
          },
        ],
      },
    ],
  },
};
