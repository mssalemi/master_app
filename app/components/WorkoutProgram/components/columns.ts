export const workoutWeekTableColumns = [];

import { z } from "zod";

export const workoutWeek = z.object({
  id: z.string(),
  workoutOne: z.string(),
  workoutTwo: z.string(),
  workoutThree: z.string(),
  workoutFour: z.string(),
  workoutFive: z.string(),
  workoutSix: z.string(),
  workoutSeven: z.string(),
});
