import React, { useState } from "react";

export default function AddSubjectModal({ onClose, onAdd }) {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [image, setImage] = useState("");
  const [progress, setProgress] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !goal || !image) {
      alert("Please fill in all fields!");
      return;
    }

    const newSubject = {
      name,
      goal,
      image,
      progress: parseInt(progress),
    };

    onAdd(newSubject);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-80 shadow-xl animate-fadeIn">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4 text-center">
          Add New Subject
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="Subject Name"
            className="w-full border border-gray-300 p-2 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Goal"
            className="w-full border border-gray-300 p-2 rounded"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          />
          <input
            type="text"
            placeholder="Image URL"
            className="w-full border border-gray-300 p-2 rounded"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <input
            type="number"
            placeholder="Progress (0–100)"
            min="0"
            max="100"
            className="w-full border border-gray-300 p-2 rounded"
            value={progress}
            onChange={(e) => setProgress(e.target.value)}
          />

          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-gray-700 px-4 py-1 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-700"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
