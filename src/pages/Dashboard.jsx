import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import LearningCard from "../components/LearningCard";
import SummaryStats from "../components/SummaryStats";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function Dashboard({ subjects }) {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    if (subjects.length > 0) {
      setChartData({
        labels: subjects.map((s) => s.name),
        datasets: [
          {
            label: "Progress (%)",
            data: subjects.map((s) => s.progress),
            backgroundColor: [
              "#1e88e5",
              "#43a047",
              "#fbc02d",
              "#e53935",
              "#8e24aa",
            ],
            borderColor: "#fff",
            borderWidth: 1,
            borderRadius: 6,
          },
        ],
      });
    }
  }, [subjects]);

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: true, position: "top" },
      tooltip: {
        backgroundColor: "#1e88e5",
        titleFont: { size: 14 },
        bodyFont: { size: 13 },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: { stepSize: 20 },
        grid: { color: "rgba(0,0,0,0.05)" },
      },
      x: { grid: { display: false } },
    },
    animation: {
      duration: 1000,
      easing: "easeInOutQuart",
    },
  };

  return (
    <div className="dashboard">
      <SummaryStats subjects={subjects} />

      <div className="chart-container">
        <h3>📈 Learning Progress Overview</h3>
        {subjects.length > 0 ? (
          <Bar data={chartData} options={chartOptions} />
        ) : (
          <p className="empty-msg">No subjects yet. Add one to see progress!</p>
        )}
      </div>

      <div className="cards">
        {subjects.map((s) => (
          <LearningCard key={s.id} subject={s} />
        ))}
      </div>
    </div>
  );
}
