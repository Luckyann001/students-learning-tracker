// src/components/Dashboard.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import SubjectList from "./SubjectList";
import ProgressChart from "./ProgressChart";

export default function Dashboard() {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    axios
      .get("https://json-server-vercel-taupe-theta.vercel.app/subjects")
      .then((res) => setSubjects(res.data));
  }, []);

  const completed = subjects.filter((s) => s.progress >= 80);
  const inProgress = subjects.filter((s) => s.progress < 80);

  return (
    <main className="dashboard">
      <h2 className="dashboard-title">📘 Student Learning Tracker</h2>

      {/* Progress Chart Section */}
      <div className="chart-section">
        <ProgressChart subjects={subjects} />
      </div>

      {/* Subject Overview Section */}
      <div className="subject-sections">
        <div className="subject-column completed">
          <h3>✅ Completed Subjects</h3>
          <SubjectList subjects={completed} />
        </div>

        <div className="subject-column inprogress">
          <h3>📖 In Progress</h3>
          <SubjectList subjects={inProgress} />
        </div>
      </div>
    </main>
  );
}
