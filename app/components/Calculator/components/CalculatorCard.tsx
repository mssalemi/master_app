interface Props {
  title: string;
  buttonTitle: string;
  description: string;
  handleSubmit: () => void;
}

import { FormField } from "~/master-components";
import { BaseCalculatorForm } from "./BaseCalculatorForm";
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

  const oneRepMaxStats: {
    title: string;
    units: string;
    value: number | undefined;
  }[] = [
    // {
    //   title: "MOSHID",
    //   units: "~1rm",
    //   value: undefined,
    // },
    {
      title: "EPLEY",
      units: "~1rm",
      value: undefined,
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
            <div className="stats stats-vertical lg:stats-horizontal shadow">
              {oneRepMaxStats.map((stat) => (
                <StatCard
                  key={stat.title}
                  backgroundColor="accent"
                  textColor="primary-content"
                  title={stat.title}
                  units={stat.units}
                  value={stat.value}
                  compact
                />
              ))}
            </div>
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
