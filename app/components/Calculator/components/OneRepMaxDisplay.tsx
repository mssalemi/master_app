import React from "react";
import { StatCard } from "./StatCard";
import { FormulaType } from "app/components/Calculator/types.js";

interface Props {
  currentFormula: FormulaType;
  units: string;
  oneRepMaxData: {
    value: number;
    weight: number;
    reps: number;
  };
}

export function OneRepMaxDisplay({
  currentFormula,
  units,
  oneRepMaxData,
}: Props) {
  return (
    <div className="stats stats-horizontal flex justify-center py-4">
      <StatCard
        title={currentFormula.label}
        units={units}
        value={Math.round(oneRepMaxData.value)}
        backgroundColor={"neutral-content"}
      />
    </div>
  );
}
