import React from "react";

const Dashboard = ({ students }) => {
  const total = students.length;
  const averageProgress =
    total > 0
      ? Math.round(students.reduce((a, s) => a + s.progress, 0) / total)
      : 0;

  return (
    <div className="dashboard">
      <h2>Overview</h2>
      <div className="stats">
        <div className="stat">
          <h3>{total}</h3>
          <p>Total Students</p>
        </div>
        <div className="stat">
          <h3>{averageProgress}%</h3>
          <p>Average Progress</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
