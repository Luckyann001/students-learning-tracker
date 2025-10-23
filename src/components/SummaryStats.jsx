import React from "react";


const SummaryStats = ({ totalItems, inProgress, completed, totalHours }) => {
  return (
    <div className="summary">
      <div className="summary-card">
        <h3>{totalItems}</h3>
        <p>Total Items</p>
      </div>
      <div className="summary-card">
        <h3>{inProgress}</h3>
        <p>In Progress</p>
      </div>
      <div className="summary-card">
        <h3>{completed}</h3>
        <p>Completed</p>
      </div>
      <div className="summary-card">
        <h3>{totalHours}</h3>
        <p>Total Hours</p>
      </div>
    </div>
  );
};

export default SummaryStats;
