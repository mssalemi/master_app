import { Form } from "@remix-run/react";

import { useState, useEffect } from "react";
import { FormulaType } from "../types";

import { Badge } from "../../../master-components/shadcn/badge";

interface Props {
  title: string;
  oneRepMax?: number;
  formulaType: FormulaType;
  handleFomulaChange: (formulaType: FormulaType) => void;
  currentData?: {
    oneRepMax: number;
    reps: number;
    weight: number;
    units: string;
  };
}

import { Modal } from "./Modal/Modal";

export const OneRepCalculator = ({
  formulaType,
  handleFomulaChange,
  title,
  oneRepMax,
  currentData,
}: Props) => {
  const buttonTitle = "Calculate";
  // Form Item Number 1
  const [checked, setChecked] = useState<boolean>(true); // lbs

  // Form Item Number 2
  const [weight, setWeight] = useState<number>(currentData?.weight || 0);
  const [reps, setReps] = useState<number>(currentData?.reps || 0);

  useEffect(() => {
    // console.log("[OneRepCalculator]", formulaType);
    // console.log("[OneRepCalculator]", weight);
  }, [formulaType, weight]);

  return (
    <div className="">
      <Form action="/calculator" method="post">
        <div className="card-body">
          <div className="flex flex-col gap-4">
            <div className="w-full">
              <h2 className="card-title">
                {title}{" "}
                <div className="flex p-4 items-center">
                  {/* <div className="badge badge-primary">{formulaType.type}</div> */}
                  <Badge>{formulaType?.label}</Badge>
                  <Modal
                    handleFormulaChange={handleFomulaChange}
                    currentFormula={formulaType}
                  />
                </div>
              </h2>
              <p className="text-base">{formulaType?.description}</p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Weight</span>
              </label>
              <input
                type="number"
                placeholder="Enter weight"
                className="input input-bordered w-full"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                name="weight"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Reps Completed</span>
              </label>
              <input
                type="number"
                placeholder="Enter reps"
                className="input input-bordered input-full w-full max-w-md"
                value={reps}
                onChange={(e) => setReps(e.target.value)}
                name="reps"
              />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <label htmlFor="unit-toggle" className="text-lg font-medium">
              Units
            </label>
            <input
              id="unit-toggle"
              type="checkbox"
              className="toggle toggle-secondary"
              checked={checked}
              onChange={() => setChecked(!checked)}
              name="units"
              aria-label="Toggle between pounds and kilograms"
            />
            <span className="text-sm font-semibold">
              {checked ? "lbs" : "kg"}
            </span>
          </div>

          <div className="mt-4">
            <button type="submit" className="btn btn-primary btn-block btn-sm">
              {buttonTitle}
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
};
