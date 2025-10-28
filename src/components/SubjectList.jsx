// src/components/SubjectList.jsx
import React from "react";

export default function SubjectList({ subjects }) {
  return (
    <div className="subject-list">
      {subjects.map((subject) => (
        <div key={subject.id} className="subject-item">
          <h4>{subject.name}</h4>
          <p>{subject.progress}%</p>
        </div>
      ))}
    </div>
  );
}
