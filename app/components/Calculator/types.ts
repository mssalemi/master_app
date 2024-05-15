export type FORMULA_TYPE =
  | "brzycki"
  | "epley"
  | "med-ai"
  | "lombardi"
  | "moshid";

export interface FormulaType {
  type: FORMULA_TYPE;
  formula: (weight: number, reps: number) => number;
  repsMaxPercentage: (reps: number) => number;
}

export const FORMULAS: FormulaType[] = [
  {
    type: "brzycki",
    formula: (weight: number, reps: number) => weight * (36 / (37 - reps)),
    repsMaxPercentage: (reps: number) => 100 * (36 / (37 - reps)),
  },
  {
    type: "epley",
    formula: (weight: number, reps: number) => weight * (1 + reps / 30),
    repsMaxPercentage: (reps: number) => 100 / (1 + reps / 30),
  },
  {
    type: "med-ai",
    formula: (weight: number, reps: number) => weight * (1 + reps / 28), // Hypothetical
    repsMaxPercentage: (reps: number) => 100 / (1 + reps / 28),
  },
  {
    type: "lombardi",
    formula: (weight: number, reps: number) => weight * Math.pow(reps, 0.1),
    repsMaxPercentage: (reps: number) => 100 * Math.pow(reps, -0.1),
  },
  {
    type: "moshid",
    formula: (weight: number, reps: number) =>
      weight * (42 / (42 - Math.min(reps, 10))), // Hypothetical
    repsMaxPercentage: (reps: number) => 100 * (42 / (42 - Math.min(reps, 10))),
  },
];

export const findFormula = (type: FORMULA_TYPE): FormulaType => {
  return FORMULAS.find((formula) => formula.type === type) as FormulaType;
};
