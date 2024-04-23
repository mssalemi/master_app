import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "ONE Rep Max Calculator" },
    { name: "description", content: "Calculator to estimate your rep maxes!" },
  ];
};

export default function CalculatorPage() {
  return <>Calculator</>;
}
