import { useState, useEffect } from "react";
import { FORMULA_TYPE } from "../types";

interface Props {
  title: string;
  buttonTitle: string;
  description: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

import { Modal } from "./Modal/Modal";
import { StatCard } from "./StatCard";

export const OneRepCalculator = ({
  buttonTitle,
  description,
  title,
  handleSubmit,
}: Props) => {
  // Form Item Number 1
  const [formulaType, setFormulaType] = useState<FORMULA_TYPE>("brzycki");

  useEffect(() => {
    console.log("[OneRepCalculator]", formulaType);
  }, [formulaType]);

  return (
    <div className="card-compact bg-base-100 shadow-xl">
      <form onSubmit={handleSubmit}>
        <div className="card-body">
          <div className="flex flex-col md:flex-row md:justify-between gap-4">
            <div className="w-full md:w-2/3">
              <h2 className="card-title">
                {title}{" "}
                <div className="flex p-4 items-center">
                  <div className="badge badge-primary">{formulaType}</div>
                  <Modal
                    handleFormulaChange={setFormulaType}
                    currentFormula={formulaType}
                  />
                </div>
              </h2>
              <p className="text-base">{description}</p>
              <StatCard
                key={"1rm"}
                textColor="primary-content"
                title={"1RM"}
                units={"Estimate"}
                value={0}
                compact
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
