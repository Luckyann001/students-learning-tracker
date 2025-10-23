import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import "../App.css";

const ProgressChart = ({ data }) => {
  return (
    <div className="chart-container">
      <h2>📊 Progress Overview</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="title" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="progress" fill="#5b21b6" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProgressChart;
