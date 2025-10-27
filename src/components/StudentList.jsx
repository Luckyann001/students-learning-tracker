import React from "react";

const StudentList = ({ students }) => (
  <div className="student-list">
    <h3>Student List</h3>
    <ul>
      {students.map((s) => (
        <li key={s.id}>
          <span>{s.name}</span>
          <span className="progress">{s.progress}%</span>
        </li>
      ))}
    </ul>
  </div>
);

export default StudentList;
