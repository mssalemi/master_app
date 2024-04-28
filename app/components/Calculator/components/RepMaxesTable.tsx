const CONTENT_IMG_URL =
  "https://i.postimg.cc/G2H9Qhwc/max-rep-tracker-clipboard-icon.png";

const CONTENT_IMG_URL_transparent =
  "https://i.postimg.cc/WbwyNcKb/max-rep-tracker-clipboard-icon-removebg-preview.png";

interface RepEstimate {
  repRange: [number, number];
  percentage: number;
}

export const RepMaxesTable = () => {
  const rows = [100, 95, 90, 85, 80, 75, 70, 65, 60];
  const reps = [
    [1],
    [2],
    [3, 4],
    [5, 6],
    [7, 9],
    [9, 11],
    [12, 14],
    ["15+"],
    ["18+"],
  ];

  const repEstimates = [
    { repRange: [1, 1], percentage: 100 },
    { repRange: [2, 2], percentage: 95 },
    { repRange: [3, 4], percentage: 90 },
    { repRange: [5, 6], percentage: 85 },
    { repRange: [7, 9], percentage: 80 },
    { repRange: [9, 11], percentage: 75 },
    { repRange: [12, 14], percentage: 70 },
    { repRange: [15, 17], percentage: 65 },
    { repRange: [18, 20], percentage: 60 },
  ] as RepEstimate[];

  return (
    <div className="">
      <table className="table">
        <thead>
          <tr>
            <th>{"Percentage"}</th>
            <th>{"Reps"}</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>
          {repEstimates.map(({ repRange, percentage }, index) => {
            const repMarkup =
              repRange[0] === repRange[1] ? repRange[0] : repRange.join(" - ");
            return (
              <tr key={index}>
                <td>{percentage} %</td>
                <td>{repMarkup}</td>
                <td> - </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
