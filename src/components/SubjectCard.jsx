import React from "react";
import ProgressBar from "./ProgressBar";

export default function SubjectCard({ subject }) {
  return (
    <div className="subject-card">
      <h3>{subject.name}</h3>
      <ProgressBar progress={subject.progress} />
    </div>
  );
}
