export default function SummaryStats({ subjects }) {
  if (!subjects || subjects.length === 0) {
    return <p>No data available yet.</p>;
  }

  const avg = subjects.reduce((a, b) => a + b.progress, 0) / subjects.length;
  const completed = subjects.filter((s) => s.progress === 100).length;

  return (
    <div className="summary">
      <div className="stat">
        <h4>Average Progress</h4>
        <p>{avg.toFixed(1)}%</p>
      </div>
      <div className="stat">
        <h4>Completed Subjects</h4>
        <p>{completed}</p>
      </div>
    </div>
  );
}
