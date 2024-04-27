export function FormulaExplorer() {
  return (
    <div className="hero bg-base-200 py-8">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold py-8">One Rep Max Formulas</h1>
          <div className="text-left mt-8">
            <div role="tablist" className="tabs tabs-lifted">
              {FORMULAS.map((formula, index) => (
                <div key={index} className="mb-6">
                  <h2 className="text-3xl font-bold">{formula.title}</h2>
                  <p>{formula.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const FORMULAS = [
  {
    title: "Epley",
    description:
      "The Epley formula is a popular method for estimating the one-repetition maximum (1RM) by adding a fraction of the weight multiplied by the reps over 30 to the weight lifted. It is particularly reliable for weights lifted over fewer reps.",
  },
  {
    title: "Brzycki",
    description:
      "The Brzycki formula calculates 1RM based on the number of times you can lift a weight before becoming fatigued. Matt Brzycki's formula adjusts the weight based on 36 divided by (37 minus the number of reps), making it ideal for higher rep ranges.",
  },
  {
    title: "Lander/Calder",
    description:
      "The Lander/Calder formula is another method used to estimate the maximum amount of weight one can lift in a single repetition. It adjusts the weight calculation based on a specific decrement per rep, providing a unique perspective for intermediate lifters.",
  },
  {
    title: "Lombardi",
    description:
      "The Lombardi formula is straightforward, proposing a power function where the weight lifted is multiplied by the reps raised to the power of 0.10. This simple model is particularly appreciated for its applicability across different exercise types.",
  },
  {
    title: "Moshid",
    description:
      "Moshid's formula, while less commonly referenced, offers an alternative approach to estimating 1RM, taking into account not just the weight and reps, but also specific coefficients tailored to the lifter’s experience level.",
  },
  {
    title: "AI",
    description:
      "The AI formula introduces a modern twist to traditional methods by incorporating machine learning algorithms to better predict 1RM based on past performance data, making it highly accurate for tech-savvy lifters.",
  },
];
