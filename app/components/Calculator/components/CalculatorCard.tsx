import { Form } from "@remix-run/react";

import { useState, useEffect } from "react";
import { FORMULAS, FormulaType } from "../types";

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
  const [formulaType, setFormulaType] = useState<FormulaType>(FORMULAS[0]);

  useEffect(() => {
    console.log("[OneRepCalculator]", formulaType);
  }, [formulaType]);

  return (
    <div className="card-compact bg-base-100 shadow-xl">
      <Form action="/calculator" method="post">
        <div className="card-body">
          <div className="flex flex-col md:flex-row md:justify-between gap-4">
            <div className="w-full md:w-2/3">
              <h2 className="card-title">
                {title}{" "}
                <div className="flex p-4 items-center">
                  <div className="badge badge-primary">{formulaType.type}</div>
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
              <div className="mt-4">
                <button type="submit" className="btn btn-primary">
                  {buttonTitle}
                </button>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};
