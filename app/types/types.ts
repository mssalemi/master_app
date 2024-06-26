export interface ExerciseType {
  exercise: string;
  name: string;
  sets: number;
  reps: number;
  percentage1RM?: number;
  rounding?: string;
  modifier?: number;
  units?: string;
}

export interface DayType {
  day: number;
  title: string;
  exercises: ExerciseType[];
}

export interface WeekType {
  days: DayType[];
  title: string;
  description: string;
  week: number;
}

export interface WorkoutProgramTemplateType {
  title: string;
  description: string;
  weeks: WeekType[];
}
