import React, { useState } from "react";

const AddTaskForm = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [hours, setHours] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTask({ title, hours, completed: false });
      setTitle("");
      setHours("");
    }
  };

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <h3>Add a New Task</h3>
      <div className="form-fields">
        <input
          type="text"
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Hours (e.g. 1.5h)"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
        />
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default AddTaskForm;
