// src/components/Dashboard.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import SubjectList from "./SubjectList";
import ProgressChart from "./ProgressChart";

export default function Dashboard() {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    axios.get("https://json-server-vercel-taupe-theta.vercel.app/subjects").then((res) => setSubjects(res.data));
  }, []);

  const completed = subjects.filter((s) => s.progress >= 80);
  const inProgress = subjects.filter((s) => s.progress < 80);

  return (
    <main className="dashboard">
      <div className="dashboard-inner">
        <h2 className="section-title">Your Learning Progress</h2>

        {/* Chart Section */}
        <ProgressChart subjects={subjects} />

        {/* Completed Subjects */}
        <div className="section">
          <h3 className="section-title">Completed Subjects ✅</h3>
          <SubjectList subjects={completed} />
        </div>

        {/* In Progress Subjects */}
        <div className="section">
          <h3 className="section-title">In Progress 📘</h3>
          <SubjectList subjects={inProgress} />
        </div>
      </div>
    </main>
  );
}
