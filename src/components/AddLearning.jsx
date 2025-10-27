import { useState } from "react";

export default function AddLearning({ addSubject }) {
  const [name, setName] = useState("");
  const [topic, setTopic] = useState("");
  const [progress, setProgress] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSubject = { name, topic, progress: Number(progress) };
    addSubject(newSubject);
    setName("");
    setTopic("");
    setProgress(0);
  };

  return (
    <div className="add-learning">
      <h2>Add New Subject</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Subject name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Progress (%)"
          value={progress}
          onChange={(e) => setProgress(e.target.value)}
          min="0"
          max="100"
          required
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
