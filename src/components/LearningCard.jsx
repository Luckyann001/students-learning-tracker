import ProgressBar from "./ProgressBar";

function LearningCard({ subject }) {
  const progress = Math.round((subject.hoursDone / subject.totalHours) * 100);

  return (
    <div className="learning-card">
      <div className="card-header">
        <span className="category">{subject.category}</span>
        <span className={`status ${subject.status.toLowerCase().replace(" ", "-")}`}>
          {subject.status}
        </span>
      </div>

      <h3>{subject.name}</h3>
      <p>{subject.description}</p>

      <ProgressBar progress={progress} />
      <p className="hours">
        {subject.hoursDone} / {subject.totalHours} hours
      </p>
    </div>
  );
}

export default LearningCard;