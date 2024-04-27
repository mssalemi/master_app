export const RepMaxesTable = () => {
  const rows = [100, 95, 90, 85, 80, 75, 70, 65];
  const reps = [[1], [2], [3, 4], [5, 6], [7, 9], [9, 11], [12, 14], ["15+"]];

  return (
    <table className="table">
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
  );
};
