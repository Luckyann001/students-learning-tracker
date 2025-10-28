import React, { useState } from "react";
import axios from "axios";

export default function AddSubjectModal({ onClose }) {
  const [name, setName] = useState("");
  const [progress, setProgress] = useState("");

  const handleAdd = async () => {
    if (!name) return alert("Enter a subject name");
    await axios.post("https://json-server-vercel-dun-beta.vercel.app/students", {
      name,
      progress: parseInt(progress) || 0,
    });
    onClose();
    window.location.reload();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add New Subject</h2>
        <input
          type="text"
          placeholder="Subject Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Progress %"
          value={progress}
          onChange={(e) => setProgress(e.target.value)}
        />
        <div className="modal-buttons">
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
          <button className="save-btn" onClick={handleAdd}>Add</button>
        </div>
      </div>
    </div>
  );
}
