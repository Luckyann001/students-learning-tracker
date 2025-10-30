import React from "react";
import { motion } from "framer-motion";
import axios from "axios";

export default function SubjectCard({ subject, onDelete }) {
  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${subject.name}"?`
    );
    if (!confirmDelete) return;

    try {
      await axios.delete(`https://json-server-vercel-taupe-theta.vercel.app/subjects/${subject.id}`);
      onDelete(subject.id);
    } catch (error) {
      console.error("Error deleting subject:", error);
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all"
    >
      <img
        src={subject.image}
        alt={subject.name}
        className="h-40 w-full object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-semibold text-indigo-600">
            {subject.name}
          </h2>
          <button
            onClick={handleDelete}
            className="text-red-500 hover:text-red-700 text-lg font-bold"
            title="Delete subject"
          >
            ✕
          </button>
        </div>

        <p className="text-gray-600 text-sm mb-3">{subject.goal}</p>

        <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
          <div
            className="bg-indigo-500 h-3 rounded-full transition-all duration-700"
            style={{ width: `${subject.progress}%` }}
          ></div>
        </div>

        <p className="text-sm text-right text-gray-700 font-medium">
          {subject.progress}% done
        </p>
      </div>
    </motion.div>
  );
}
