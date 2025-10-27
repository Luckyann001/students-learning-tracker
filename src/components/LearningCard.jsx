export default function LearningCard({ subject }) {
  return (
    <div className="card">
      <h3>{subject.name}</h3>
      <p>Topic: {subject.topic}</p>
      <p>Progress: {subject.progress}%</p>
    </div>
  );
}
