import { Modal } from "./Modal/Modal";
import { StatCard } from "./StatCard";
export const BaseCalculatorForm = ({
  handleSubmit,
  children,
  formulaType,
}: {
  formulaType: string;
  handleSubmit: () => void;
  children?: React.ReactNode;
}) => {
  const ormStats = [
    {
      title: "WEIGHT",
      units: "lbs",
      value: 225,
    },
    {
      title: "REPS",
      units: "completed",
      value: 5,
    },
  ];

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center">
        {" "}
        <div className="stats text- center text-secondary-content border-none">
          {ormStats.map((stat, index) => (
            <StatCard
              key={index}
              title={stat.title}
              units={stat.units}
              value={stat.value}
            />
          ))}
        </div>
      </div>

      {children}
    </form>
  );
};
