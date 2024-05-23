interface Props {
  title: string;
  units: string;
  value: number | undefined;
  backgroundColor?: string;
  textColor?: string;
  compact?: boolean;
}

export const StatCard = ({
  title,
  units,
  value,
  backgroundColor,
  textColor,
  compact = false,
}: Props) => {
  return (
    <div>
      {" "}
      <div
        className={`stat ${
          backgroundColor ? "bg-" + backgroundColor : ``
        } text-center ${textColor ? `text-${textColor}` : ``} ${
          compact ? "px-6 py-2" : ""
        }`}
      >
        <div className="stat-title">{title}</div>
        <div className="stat-value text-5xl">
          {value || "-"} {units}
        </div>
        <div className="stat-title">{"estimate"}</div>
      </div>
    </div>
  );
};
