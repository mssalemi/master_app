interface Props {
  title: string;
  units: string;
  value: number | undefined;
  backgroundColor?: string;
}

export const StatCard = ({ title, units, value, backgroundColor }: Props) => {
  return (
    <div
      className={`stat ${
        backgroundColor ? `bg-${backgroundColor}` : ``
      } text-center`}
    >
      <div className="stat-title">{title}</div>
      <div className="stat-value text-6xl">{value || "-"}</div>
      <div className="stat-title">{units}</div>
    </div>
  );
};
