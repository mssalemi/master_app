import * as React from "react";

import { Calendar as WTFCalendar } from "./ui/calendar";

export function Calendar() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <WTFCalendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  );
}
