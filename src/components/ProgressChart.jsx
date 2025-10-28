// src/components/ProgressChart.jsx
import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";

export default function ProgressChart({ subjects }) {
  const completed = subjects.filter((s) => s.progress >= 80).length;
  const inProgress = subjects.length - completed;

  const data = [
    { name: "Completed", value: completed },
    { name: "In Progress", value: inProgress },
  ];

  const COLORS = ["#10b981", "#3b82f6"];

  return (
    <div className="chart-container">
      <h2 className="section-title">Learning Overview</h2>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
