import LearningCard from "../components/LearningCard";
import SummaryStats from "../components/SummaryStats";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function Dashboard({ subjects }) {
  const total = subjects.length;
  const inProgress = subjects.filter(s => s.status === "In Progress").length;
  const completed = subjects.filter(s => s.status === "Completed").length;
  const totalHours = subjects.reduce((sum, s) => sum + s.totalHours, 0);

  const data = {
    labels: subjects.map(s => s.name),
    datasets: [
      {
        label: "Hours Done",
        data: subjects.map(s => s.hoursDone),
        backgroundColor: "#6a5acd",
      },
      {
        label: "Total Hours",
        data: subjects.map(s => s.totalHours),
        backgroundColor: "#d3d3f9",
      },
    ],
  };

  return (
    <div className="dashboard">
      <h2>My Learning Journey</h2>
      <p>Track your learning progress and stay consistent</p>

      <SummaryStats
        total={total}
        inProgress={inProgress}
        completed={completed}
        totalHours={totalHours}
      />

      <div className="cards-container">
        {subjects.map(sub => (
          <LearningCard key={sub.id} subject={sub} />
        ))}
      </div>

      <div className="chart-container">
        <h3>Progress Overview</h3>
        <Bar data={data} />
      </div>
    </div>
  );
}

export default Dashboard;