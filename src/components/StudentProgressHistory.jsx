import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, Title);

const StudentProgressHistory = ({ students }) => {
  const data = {
    labels: students.map((s) => s.name),
    datasets: [
      {
        label: "Learning Progress (%)",
        data: students.map((s) => s.progress),
        backgroundColor: "#2563eb90",
        borderColor: "#2563eb",
        borderWidth: 1,
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true, position: "top" },
      title: { display: true, text: "Student Progress History", font: { size: 16 } },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        grid: { color: "#eee" },
        ticks: { stepSize: 20 },
      },
      x: {
        grid: { display: false },
      },
    },
  };

  return (
    <div className="chart-container">
      <Bar data={data} options={options} />
    </div>
  );
};

export default StudentProgressHistory;
