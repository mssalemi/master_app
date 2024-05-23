import { useState } from "react";

import { QuickCalculatorForm } from "./QuickCalculatorForm";
import { Link } from "@remix-run/react";

import { FORMULAS } from "../Calculator/types";

const ORM_TITLE = "One Rep Max Calculator";
const ORM_LABEL = "1RM";
const PLACEHOLDER_MAX = "-";
const PLACEHOLDER_DESC = "Enter your reps and weight!";

const DEFAULT_FORMULA = FORMULAS[2];

export function QuickCalculator() {
  const [oneRepMaxEstimate, setOneRepMaxEstimate] = useState<
    number | undefined
  >(undefined);

  return (
    <div className="card shadow-lg compact side bg-base-200 p-4">
      <div className="card-body">
        <div className="">
          <h2 className="card-title pb-2">{ORM_TITLE}</h2>
          <div className="md:grid md:grid-cols-[3fr_1fr] gap-4 ">
            <div>
              <QuickCalculatorForm
                formula={DEFAULT_FORMULA}
                handleOneRepMaxChange={setOneRepMaxEstimate}
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="stats shadow flex justify-center">
                <div className="stat place-items-center">
                  <div className="stat-title">{ORM_LABEL}</div>
                  <div className="stat-value">
                    {" "}
                    {oneRepMaxEstimate || PLACEHOLDER_MAX}
                  </div>
                  <div className="stat-desc">{PLACEHOLDER_DESC}</div>
                </div>
              </div>
              <div className="stats shadow flex justify-center">
                <div className="stat place-items-center">
                  <div className="stat-title">{DEFAULT_FORMULA.label}</div>
                  <div className="stat-desc">
                    See our{" "}
                    <Link to="/calculator">
                      <span className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                        in-depth{" "}
                      </span>
                    </Link>
                    calculators for more details!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
