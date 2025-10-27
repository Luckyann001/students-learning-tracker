import React from "react";

const StudentDetails = ({ student }) => {
  return (
    <div className="student-details">
      <h2>{student.name}</h2>
      <p><strong>Course:</strong> {student.course}</p>
      <p><strong>Progress:</strong> {student.progress}%</p>
      <p><strong>Notes:</strong> {student.notes || "No notes yet"}</p>
    </div>
  );
};

export default StudentDetails;
