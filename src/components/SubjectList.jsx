import React from "react";
import SubjectCard from "./SubjectCard";

export default function SubjectList({ subjects }) {
  return (
    <div className="subject-list">
      {subjects.map((sub) => (
        <SubjectCard key={sub.id} subject={sub} />
      ))}
    </div>
  );
}
