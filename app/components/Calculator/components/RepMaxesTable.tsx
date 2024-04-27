const CONTENT_IMG_URL =
  "https://i.postimg.cc/G2H9Qhwc/max-rep-tracker-clipboard-icon.png";

const CONTENT_IMG_URL_transparent =
  "https://i.postimg.cc/WbwyNcKb/max-rep-tracker-clipboard-icon-removebg-preview.png";

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

  return (
    <div className="flex justify-center">
      {/* <div>
        <figure className="hidden sm:block">
          <img
            src={CONTENT_IMG_URL_transparent}
            alt="Clipboard reading MAP REP Tracker"
          />
        </figure>
      </div> */}
      <table className="table table-center">
        <thead>
          <tr>
            {rows.map((row, index) => (
              <th key={index}>{row}%</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {reps.map((rep, index) => (
              <td key={index}>{rep.join(" - ")}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
