import React, { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard";
import AddSubjectModal from "./components/AddSubjectModal";
import axios from "axios";

export default function App() {
  const [subjects, setSubjects] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const fetchSubjects = async () => {
    try {
      const res = await axios.get("https://json-server-vercel-taupe-theta.vercel.app/subjects");
      setSubjects(res.data);
    } catch (error) {
      console.error("Error fetching subjects:", error);
    }
  };

  useEffect(() => {
    fetchSubjects();
  }, []);

  const handleAddSubject = async (newSubject) => {
    try {
      await axios.post("https://json-server-vercel-taupe-theta.vercel.app/subjects", newSubject);
      fetchSubjects();
      setShowModal(false);
    } catch (error) {
      console.error("Error adding subject:", error);
    }
  };

  const handleDeleteSubject = (id) => {
    setSubjects(subjects.filter((subj) => subj.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-indigo-100 to-blue-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-indigo-700 mb-10 drop-shadow">
          🎓 Smart Student Tracker
        </h1>

        <div className="flex justify-center mb-8">
          <button
            onClick={() => setShowModal(true)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full shadow-md transition"
          >
            ➕ Add New Subject
          </button>
        </div>

        <Dashboard subjects={subjects} onDelete={handleDeleteSubject} />

        {showModal && (
          <AddSubjectModal
            onClose={() => setShowModal(false)}
            onAdd={handleAddSubject}
          />
        )}
      </div>
    </div>
  );
}
