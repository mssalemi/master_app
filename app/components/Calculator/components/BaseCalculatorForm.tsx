import { Modal } from "./Modal/Modal";
export const BaseCalculatorForm = ({
  handleSubmit,
  children,
  formulaType,
}: {
  formulaType: string;
  handleSubmit: () => void;
  children?: React.ReactNode;
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex p-4 items-center">
        <div className="badge badge-accent">{formulaType}</div>
        <Modal />
      </div>
      <div className="stats text-secondary-content border-none">
        <div className="stat">
          <div className="stat-title">WEIGHT</div>
          <div className="stat-value text-6xl">315</div>
          <div className="stat-title">lbs</div>
        </div>
        <div className="stat border-none">
          <div className="stat-title">REPS</div>
          <div className="stat-value text-6xl">5</div>
          <div className="stat-title">reps completed</div>
        </div>
      </div>
      {children}
    </form>
  );
};
