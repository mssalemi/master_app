interface Props {
  title: string;
  buttonTitle: string;
  description: string;
  handleSubmit: () => void;
}

import { FormField } from "~/master-components";
import { BaseCalculatorForm } from "./BaseCalculatorForm";
import { ResultsCard } from "./ResultsCard";
import { Modal } from "./Modal/Modal";
import { StatCard } from "./StatCard";

export const CalculatorCard = ({
  buttonTitle,
  description,
  title,
  handleSubmit,
}: Props) => {
  const formulaType = "EPLEY";
  const formFields: FormField[] = [
    {
      key: "weight",
      type: "number",
      placeholder: "convert to int",
      value: "",
    },
    {
      key: "reps-completed",
      type: "number",
      placeholder: "reps completed",
      value: "",
    },
  ];

  return (
    <div className="card-compact bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="flex flex-col md:flex-row md:justify-between gap-4">
          <div className="w-full md:w-2/3">
            <h2 className="card-title">
              {title}{" "}
              <div className="flex p-4 items-center">
                <div className="badge badge-accent">{formulaType}</div>
                <Modal />
              </div>
            </h2>
            <div className="text-left text-sm">{description}</div>
          </div>
          <div className="py-8 md:py-0">
            {/* <ResultsCard /> */}
            <StatCard
              backgroundColor="neutral-content"
              title="1RM"
              units="EPLEY estimate"
              value={undefined}
            />
          </div>
        </div>

        <BaseCalculatorForm
          handleSubmit={handleSubmit}
          formFields={formFields}
          formulaType={formulaType}
        >
          <div className="card-actions justify-end py-4">
            <button className="btn btn-sm btn-primary btn-block">
              {buttonTitle}
            </button>
          </div>
        </BaseCalculatorForm>
      </div>
    </div>
  );
};
