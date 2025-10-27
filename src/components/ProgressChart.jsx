import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function ProgressChart({ subjects }) {
  const data = {
    labels: subjects.map((s) => s.name),
    datasets: [
      {
        label: "Progress (%)",
        data: subjects.map((s) => s.progress),
        backgroundColor: "#4f46e5",
        borderRadius: 6,
      },
    ],
  };

  return (
    <div className="chart">
      <h3>Overall Progress</h3>
      <Bar data={data} />
    </div>
  );
}
