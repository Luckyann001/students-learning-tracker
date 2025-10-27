import React from "react";

const LearningCard = ({ task, toggleTask }) => {
  return (
    <div className={`learning-card ${task.completed ? "completed" : ""}`}>
      <div className="card-left">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />
        <span>{task.title}</span>
      </div>
      <div className="card-right">{task.hours}</div>
    </div>
  );
};

export default LearningCard;
