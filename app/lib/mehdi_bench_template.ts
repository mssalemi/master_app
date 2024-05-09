import { WorkoutProgramTemplateType } from "../types/types";
import { CANDITO_WEEKS } from "./candito_weeks";
import { DIFFICULTY_LEVELS, GOALS } from "./difficulty_levels";

const WORKOUT_PROGRAM_TITLE =
  "MedxMan's 5 Week Candito Bench Dupe - Express Edition";

const AUTHOR = "MedxMan";

const PROGRAM_FOCUS = ["Bench Press"];

const WHY_CHOOSE = `
Remember the glory days when “former athlete” meant something a tad more glorious than it does now? Candito’s 5-Week Bench Program is your ticket back to those days, but without the all-day gym marathons. Designed for us, the busy has-beens who still want to look jacked and lift heavy, this program cuts through the fluff. It’s all about getting stronger and reclaiming that jaw-dropping physique with just 30-minute workouts, 3-5 times a week. Because let’s be real, who has time to spend all day in the gym anymore? Bench more, lift more, and maybe even flex in the mirror a bit—it’s time to turn those “back in my day” stories into “look at me now” results.
`;

const PHILOSOPHY = `
The MedxMan x Candito Hybrid 5 Week Bench Program is designed around a unique philosophy 
that focuses on both volume and intensity over a 5-week cycle to maximize 
strength gains. The program is aimed for busy folks wants to spend 30 minutes in the gym. 
This program can help keep consistent gains for cycle after cycle. Heck, 
I'm mid 30's now and I'm blasting past my peak... with only 30 minutes workouts. 
Here's how the program is structured:
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

const CLOSING =
  "This program is designed to help you increase your bench press strength and muscle mass.";

const TEMPLATE_DESCRIPTION = `
The MedxMan's 5 Week Bench Dupe is a modified version of Candito's 5 Week Bench Program,
tailored to help you increase your bench press strength and muscle mass. The program is
structured around a unique philosophy that focuses on both volume and intensity over a
5-week cycle to maximize strength gains.
`;

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
  title: WORKOUT_PROGRAM_TITLE,
  description: {
    whyChoose: WHY_CHOOSE,
    philosophy: PHILOSOPHY,
    weekOverview: WEEKS_OVERVIEW,
    closing: CLOSING,
  },
  creator: AUTHOR,
  duration: `${CANDITO_WEEKS.length} weeks`,
  difficulty: DIFFICULTY_LEVELS[2],
  goal: GOALS[0],
  focus: PROGRAM_FOCUS,
  programTemplate: {
    title: WORKOUT_PROGRAM_TITLE,
    description: TEMPLATE_DESCRIPTION,
    weeks: CANDITO_WEEKS,
  },
};
