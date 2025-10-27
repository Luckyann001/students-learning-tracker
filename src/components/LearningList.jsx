import React from "react";
import LearningCard from "./LearningCard";

const LearningList = ({ tasks, toggleTask }) => {
  return (
    <div className="learning-list">
      <h2>Today's Tasks</h2>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <LearningCard key={task.id} task={task} toggleTask={toggleTask} />
        ))
      ) : (
        <p className="empty-message">No tasks yet. Add one below!</p>
      )}
    </div>
  );
};

export default LearningList;
