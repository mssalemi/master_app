import { Form, FormField } from "~/master-components";

const defaultDesc =
  "This is using the EPLEY Formula. Enter your weight and reps to calculate your 1RM.";

export const Calculator = () => {
  return (
    <div className="flex">
      <CalculatorInputCard
        title={"Calculator your 1RepMax"}
        description={defaultDesc}
        buttonTitle={"Calculator"}
        handleSubmit={() => {
          console.log("hey");
        }}
      />

      <CalculatorResultCard />
    </div>
  );
};

interface Props {
  title: string;
  buttonTitle: string;
  description: string;
  handleSubmit: () => void;
}

const CalculatorInputCard = ({
  buttonTitle,
  description,
  title,
  handleSubmit,
}: Props) => {
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
    <div className="card w-full md:w-2/3 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="text-left text-sm">{description}</div>
        <BaseCalculatorForm handleSubmit={handleSubmit} formFields={formFields}>
          <div className="card-actions justify-end py-4">
            <button className="btn btn-primary btn-block">{buttonTitle}</button>
          </div>
        </BaseCalculatorForm>
      </div>
    </div>
  );
};

const BaseCalculatorForm = ({
  handleSubmit,
  formFields,
  children,
}: {
  handleSubmit: () => void;
  formFields: FormField[];
  children?: React.ReactNode;
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-around">
        <InputNumber
          htmlFor={"reps"}
          placeholder={5}
          labelTitle="XYZ"
          title="REPS"
        />
        <InputNumber
          htmlFor={"weight"}
          placeholder={225}
          labelTitle="XYZ"
          title="WEIGHT"
        />
      </div>

      {children}
    </form>
  );
};

const CalculatorResultCard = () => {
  return (
    <div className="card w-full md:w-1/3 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Card title!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </div>
  );
};

const InputNumber = ({
  htmlFor,
  placeholder,
  labelTitle,
  title,
}: {
  htmlFor: string;
  placeholder: number;
  labelTitle: string;
  title: string;
}) => {
  return (
    <>
      <label htmlFor={htmlFor}>
        <div className="flex flex-col">
          <input
            id="weightInput"
            type="number"
            className="w-32 h-32 text-center text-5xl rounded-md shadow-lg border border-gray-300"
            placeholder={placeholder.toString()}
            aria-label="Enter weight for calculation"
          />
          <span className="text-center">{title}</span>
        </div>
      </label>
    </>
  );
};
