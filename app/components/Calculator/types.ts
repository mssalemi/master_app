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
  label: string;
  description: string;
}

export const FORMULAS: FormulaType[] = [
  {
    type: "brzycki",
    formula: (weight: number, reps: number) => weight * (36 / (37 - reps)),
    repsMaxPercentage: (reps: number) => 100 * (36 / (37 - reps)),
    label: "Brzycki",
    description:
      "The Brzycki formula calculates the estimated 1RM based on the weight lifted and the number of repetitions performed. It assumes a decremental increase in maximum capacity with each additional rep. This formula is widely recognized for its practicality in strength training.",
  },
  {
    type: "epley",
    formula: (weight: number, reps: number) => weight * (1 + reps / 30),
    repsMaxPercentage: (reps: number) => 100 / (1 + reps / 30),
    label: "Epley",
    description:
      "The Epley formula is a simple and popular method for estimating 1RM. It adds a proportion of the weight lifted per 30 repetitions to the weight itself. This formula is commonly used in both amateur and professional settings.",
  },
  {
    type: "med-ai",
    formula: (weight: number, reps: number) => weight * (1 + reps / 28),
    repsMaxPercentage: (reps: number) => 100 / (1 + reps / 28),
    label: "Med-AI",
    description:
      "The Med-AI formula is a hypothetical model for calculating 1RM, similar to Epley but adjusts the incremental increase for each repetition to be per 28 instead of 30. This might provide a slightly more aggressive estimate.",
  },
  {
    type: "lombardi",
    formula: (weight: number, reps: number) => weight * Math.pow(reps, 0.1),
    repsMaxPercentage: (reps: number) => 100 * Math.pow(reps, -0.1),
    label: "Lombardi",
    description:
      "The Lombardi formula uses a power function based on the number of reps performed. This method recognizes the power-like relationship between the reps and the weights lifted, offering a unique perspective on strength capacity.",
  },
  {
    type: "moshid",
    formula: (weight: number, reps: number) =>
      weight * (42 / (42 - Math.min(reps, 10))),
    repsMaxPercentage: (reps: number) => 100 * (42 / (42 - Math.min(reps, 10))),
    label: "Moshid",
    description:
      "The Moshid formula is another hypothetical approach that adjusts the maximum weight possible by a decremental factor based on a fixed upper limit of repetitions, specifically capping the influence of reps to 10. This formula could be used to estimate 1RM in scenarios where higher reps might overly influence other models.",
  },
];

export const findFormula = (type: FORMULA_TYPE): FormulaType => {
  return FORMULAS.find((formula) => formula.type === type) as FormulaType;
};
