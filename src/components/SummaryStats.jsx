import React from "react";

const SummaryStats = ({ tasks }) => {
  const completed = tasks.filter((t) => t.completed).length;
  const total = tasks.length;
  const progress = Math.round((completed / total) * 100) || 0;

  return (
    <div className="summary-stats">
      <div className="stat-card">
        <h3>Total Tasks</h3>
        <p>{total}</p>
      </div>
      <div className="stat-card">
        <h3>Completed</h3>
        <p>{completed}</p>
      </div>
      <div className="stat-card">
        <h3>Progress</h3>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
        <small>{progress}% complete</small>
      </div>
    </div>
  );
};

export default SummaryStats;
