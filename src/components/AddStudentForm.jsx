import React, { useState } from "react";

const AddStudentForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [progress, setProgress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || progress === "") return;
    const newStudent = {
      id: Date.now(),
      name,
      progress: parseInt(progress),
    };
    onAdd(newStudent);
    setName("");
    setProgress("");
  };

  return (
    <form className="add-student" onSubmit={handleSubmit}>
      <h3>Add Student</h3>
      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Progress (%)"
        value={progress}
        onChange={(e) => setProgress(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddStudentForm;
