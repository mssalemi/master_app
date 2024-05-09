import { bench_accessory } from "./bench";

import { WorkoutProgramTemplateType } from "../types/types";

const week1 = {
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
    "Increasing intensity with higher percentages of 1RM to build strength.",
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
      ],
    },
  ],
};

const week3 = {
  week: 3,
  title: "Peak Phase",
  description:
    "Peaking intensity with fewer reps and increased load to maximize strength gains.",
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
      ],
    },
  ],
};

const week4 = {
  week: 4,
  title: "Preparation Phase",
  description:
    "Preparing for maximal lifts by increasing load and decreasing volume.",
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
      ],
    },
  ],
};

const week5 = {
  week: 5,
  title: "Testing Phase",
  description: "Testing strength gains with near-maximal lifts.",
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
      ],
    },
  ],
};

const WHY_CHOOSE = `
In the world of strength training, too many programs complicate what
should be simple—getting stronger. That’s why Candito’s 5-Week Bench
Program strips it back to basics, offering a clear, concise plan that
lets you focus on what really matters: lifting more and getting
stronger.
`;

const PHILOSOPHY = `
The Candito 5 Week Bench Program is designed around a unique philosophy 
that focuses on both volume and intensity over a 5-week cycle to maximize 
strength gains. Here's how the program is structured:
`;

const WEEKS_OVERVIEW: {
  title: string;
  description: string;
}[] = [
  {
    title: "Week 1-2",
    description: `High Volume Phase - During the first two weeks, participants bench three times per week with higher reps. This phase is about 'feeling the burn', building endurance, and preparing muscles for heavier loads. It's essential for creating a solid foundation and enhancing muscle hypertrophy`,
  },
  {
    title: "Week 3-4",
    description: `Intensity Phase - As we transition into the third and fourth weeks, the frequency of workouts decreases to twice a week, allowing for the introduction of heavier weights. This phase focuses on increasing strength by challenging your muscles with high-intensity lifts, ensuring significant strength development.`,
  },
  {
    title: "Week 5",
    description: `Test Week - The final week serves as a testing phase where you can choose to either perform as many reps as possible (AMRAP) or attempt a one-rep max (1RM). This week is crucial for assessing progress and setting benchmarks for future training.`,
  },
];

export const WORKOUT_PROGRAMS_EXAMPLE: {
  id: string;
  title: string;
  description: {
    whyChoose: string;
    philosophy: string;
    weekOverview: {
      title: string;
      description: string;
    }[];
    closing: string;
  };
  creator: string;
  duration: string;
  difficulty: string;
  goal: string;
  focus: string[];
  programTemplate: WorkoutProgramTemplateType;
} = {
  id: "canditoxmed001",
  title: "5's Week Bench Cycle",
  description: {
    whyChoose: WHY_CHOOSE,
    philosophy: PHILOSOPHY,
    weekOverview: WEEKS_OVERVIEW,
    closing:
      "This program is designed to help you increase your bench press strength and muscle mass.",
  },
  creator: "Jonnie Candito",
  duration: "6 weeks",
  difficulty: "Intermediate",
  goal: "Strength",
  focus: ["Bench Press"],
  programTemplate: {
    title: "Mehdi 5 Week Bench Cycle",
    description:
      "The Mehdi 5 Week Bench Cycle is a 5 week training program built using periodization. It is built to help you increase your bench press strength and muscle mass.",
    weeks: [week1, week2, week3, week4, week5],
  },
};
