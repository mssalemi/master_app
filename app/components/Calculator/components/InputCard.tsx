interface Props {
  title: string;
  buttonTitle: string;
  description: string;
  handleSubmit: () => void;
}

import { FormField } from "~/master-components";
import { BaseCalculatorForm } from "./BaseCalculatorForm";

export const InputCard = ({
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
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="text-left text-sm">{description}</div>
        <BaseCalculatorForm
          handleSubmit={handleSubmit}
          formFields={formFields}
          formulaType={formulaType}
        >
          <div className="card-actions justify-end py-4">
            <button className="btn btn-primary btn-block">{buttonTitle}</button>
          </div>
        </BaseCalculatorForm>
      </div>
    </div>
  );
};
