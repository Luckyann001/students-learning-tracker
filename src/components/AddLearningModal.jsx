import React, { useState } from "react";
import "../App.css";

const AddLearningModal = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    hours: "",
    progress: 0,
    status: "In Progress",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      ...formData,
      hours: parseFloat(formData.hours),
      progress: parseInt(formData.progress),
    };
    onSave(newItem);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add New Learning</h2>
        <form onSubmit={handleSubmit} className="add-form">
          <label>Subject Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="e.g., React Basics"
          />

          <label>Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="e.g., Web Development"
          />

          <label>Hours</label>
          <input
            type="number"
            name="hours"
            value={formData.hours}
            onChange={handleChange}
            min="0"
          />

          <label>Progress (%)</label>
          <input
            type="number"
            name="progress"
            value={formData.progress}
            onChange={handleChange}
            min="0"
            max="100"
          />

          <label>Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>

          <div className="form-buttons">
            <button type="submit" className="save-btn">
              Save
            </button>
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddLearningModal;
