import { Calendar } from "../../../master-components/Calendar/Calendar";

export const QuickWorkoutAdd = () => {
  return (
    <div className="container flex">
      <div className="flex space-y-4 text-center p-4 md:w-1/2">
        <Calendar />
      </div>
    </div>
  );
};
