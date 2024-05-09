import { WeekType } from "../types/types";
import { bench_accessory } from "./bench";

const week1 = {
  week: 1,
  title: "The Beginning",
  description:
    "Begin your regimen with a focus on bench press followed by various back and accessory exercises, the accessories can be performed in any order. Efficiently manage your gym time by superseting exercises. Aim to complete your workout within 30 minutes by staying focused and minimizing distractions like phone usage. #dadlife - but if you have the time, see the real candito bench program!",

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
          name: "Bench Press",
        },
        {
          exercise: "Bench Press",
          sets: 1,
          reps: 10,
          percentage1RM: 0.675,
          rounding: undefined,
          name: "Bench Press",
        },
        {
          exercise: "Bench Press",
          sets: 1,
          reps: 8,
          percentage1RM: 0.7,
          rounding: undefined,
          name: "Bench Press",
        },
        {
          exercise: "Bench Press",
          sets: 1,
          reps: 6,
          percentage1RM: 0.775,
          rounding: undefined,
          name: "Bench Press",
        },
        ...bench_accessory,
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
          name: "Bench Press",
        },
        {
          exercise: "Bench Press",
          sets: 1,
          reps: 10,
          percentage1RM: 0.675,
          rounding: undefined,
          name: "Bench Press",
        },
        {
          exercise: "Bench Press",
          sets: 1,
          reps: 8,
          percentage1RM: 0.7,
          rounding: undefined,
          name: "Bench Press",
        },
        {
          exercise: "Bench Press",
          sets: 1,
          reps: 6,
          percentage1RM: 0.775,
          rounding: undefined,
          name: "Bench Press",
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
          name: "Bench Press",
        },
        ...bench_accessory,
      ],
    },
  ],
};

const week2 = {
  week: 2,
  title: "Intensification Phase",
  description:
    "Continue with bench press as your primary exercise, accompanied by back exercises that can be rearranged as needed. Prioritize intensity and maintain a brisk pace to keep your workouts around 30 minutes. Give around 1:45 - 2:30 rest on the main sets, do not go to failure, if you miss 1-2 rep - no bigger, the amrap day is coming up!",
  days: [
    {
      day: 1,
      title: "Bench Day 1",
      exercises: [
        {
          exercise: "Bench Press",
          name: "Bench Press",
          sets: 1,
          reps: 10,
          percentage1RM: 0.725,
          rounding: undefined,
        },
        {
          exercise: "Bench Press",
          name: "Bench Press",
          sets: 1,
          reps: 8,
          percentage1RM: 0.775,
          rounding: undefined,
        },
        {
          exercise: "Bench Press",
          name: "Bench Press",
          sets: 1,
          reps: 6,
          percentage1RM: 0.8,
          rounding: "up",
          modifier: 5,
        },
        ...bench_accessory,
      ],
    },
    {
      day: 2,
      title: "Bench Day 2",
      exercises: [
        {
          exercise: "Bench Press",
          name: "Bench Press",
          sets: 1,
          reps: 10,
          percentage1RM: 0.725,
          rounding: undefined,
        },
        {
          exercise: "Bench Press",
          name: "Bench Press",
          sets: 1,
          reps: 8,
          percentage1RM: 0.775,
          rounding: undefined,
        },
        {
          exercise: "Bench Press",
          name: "Bench Press",
          sets: 1,
          reps: 6,
          percentage1RM: 0.8,
          rounding: "up",
          modifier: 5,
        },
        ...bench_accessory,
      ],
    },
    {
      day: 3,
      title: "Bench Day 3",
      exercises: [
        {
          exercise: "Bench Press",
          name: "Bench Press",
          sets: 1,
          reps: 15,
          percentage1RM: 0.8,
          rounding: "up",
          modifier: -5,
        },
        ...bench_accessory,
      ],
    },
  ],
};

const week3 = {
  week: 3,
  title: "Peak Phase",
  description:
    "Things are getting heavy.... As you move towards peak intensity, start your sessions with bench press and adjust the sequence of subsequent exercises for optimal supersets. Stay efficient and avoid distractions to make the most of each 30-minute session. Sets are heavy this week, but weights are managable, strategize how you will attack these sets. 5,5,5 or 6,4,4? Try to maximize the total reps on the entire bench session, not one individual set (7/3/1)!",
  days: [
    {
      day: 1,
      title: "Bench Day 1",
      exercises: [
        {
          exercise: "Bench Press",
          name: "Bench Press",
          sets: 3, // 3 sets as specified
          reps: 15,
          percentage1RM: 0.85, // 85% of 1RM
          rounding: undefined,
        },
        ...bench_accessory,
      ],
    },
    {
      day: 2,
      title: "Bench Day 2",
      exercises: [
        {
          exercise: "Bench Press",
          name: "Bench Press",
          sets: 1, // Assuming 1 set is required here, as not specified
          reps: 15,
          percentage1RM: 0.85,
          rounding: undefined,
          modifier: 5, // Add 5 lbs as per your instruction
        },
        ...bench_accessory,
      ],
    },
  ],
};

const week4 = {
  week: 4,
  title: "Preparation Phase",
  description:
    "This week, focus intensifies on preparing for maximal lifts, starting with bench press. Arrange your remaining exercises flexibly to maximize rest during your bench press time, heck if you constrained on time, give youself 3-4 min rest of bench, and just superset all your accessories. Yolo. And back to the grind.",
  days: [
    {
      day: 1,
      title: "Bench Day 1",
      exercises: [
        {
          exercise: "Bench Press",
          name: "Bench Press",
          sets: 1,
          reps: 3,
          percentage1RM: 0.875,
          rounding: "down",
          modifier: -5,
        },
        {
          exercise: "Bench Press",
          name: "Bench Press",
          sets: 1,
          reps: 3,
          percentage1RM: 0.9,
          rounding: "down",
          modifier: -5,
        },
        {
          exercise: "Bench Press",
          name: "Bench Press",
          sets: 1,
          reps: 3,
          percentage1RM: 0.9,
          rounding: undefined,
        },
        ...bench_accessory,
      ],
    },
    {
      day: 2,
      title: "Bench Day 2",
      exercises: [
        {
          exercise: "Bench Press",
          name: "Bench Press",
          sets: 1,
          reps: 3,
          percentage1RM: 0.875,
          rounding: undefined,
        },
        {
          exercise: "Bench Press",
          name: "Bench Press",
          sets: 1,
          reps: 2,
          percentage1RM: 0.9,
          rounding: undefined,
        },
        {
          exercise: "Bench Press",
          name: "Bench Press",
          sets: 1,
          reps: 15,
          percentage1RM: 0.95,
          rounding: undefined,
        },
        ...bench_accessory,
      ],
    },
  ],
};

const week5 = {
  week: 5,
  title: "Testing Phase",
  description:
    "Test your limits this week with near-maximal lifts, beginning each session with the bench press. Only one bench set this week, so make it count. The accessories can be performed in any order, but make sure to prioritize the bench press. This week is all about testing your strength and setting new benchmarks for future training. Good luck!",

  days: [
    {
      day: 1,
      title: "Bench Day 1",
      exercises: [
        {
          exercise: "Bench Press",
          name: "Bench Press",
          sets: 1,
          reps: 15,
          percentage1RM: 0.975,
          rounding: undefined,
        },
        ...bench_accessory,
      ],
    },
  ],
};

export const CANDITO_WEEKS: WeekType[] = [week1, week2, week3, week4, week5];
