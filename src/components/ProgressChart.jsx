import React from "react";

const ProgressChart = ({ averageProgress }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (averageProgress / 100) * circumference;

  return (
    <div className="progress-chart">
      <svg width="140" height="140">
        <circle
          cx="70"
          cy="70"
          r={radius}
          stroke="#eee"
          strokeWidth="10"
          fill="none"
        />
        <circle
          cx="70"
          cy="70"
          r={radius}
          stroke="#2563eb"
          strokeWidth="10"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 0.5s ease" }}
          transform="rotate(-90 70 70)"
        />
      </svg>
      <span className="chart-text">{averageProgress}%</span>
      <p>Average Progress</p>
    </div>
  );
};

export default ProgressChart;
