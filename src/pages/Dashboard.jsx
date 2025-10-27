import LearningCard from "../components/LearningCard";
import SummaryStats from "../components/SummaryStats";
import ProgressChart from "../components/ProgressChart";

export default function Dashboard({ subjects }) {
  return (
    <div className="dashboard">
      <h2>Learning Dashboard</h2>
      <SummaryStats subjects={subjects} />
      <ProgressChart subjects={subjects} />
      <div className="card-grid">
        {subjects.map((subject) => (
          <LearningCard key={subject.id} subject={subject} />
        ))}
      </div>
    </div>
  );
}
