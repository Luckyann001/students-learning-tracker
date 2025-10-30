import React, { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard";
import AddSubjectModal from "./components/AddSubjectModal";
import axios from "axios";

export default function App() {
  const [subjects, setSubjects] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const fetchSubjects = async () => {
    try {
      const res = await axios.get("http://localhost:5000/subjects");
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
      await axios.post("http://localhost:5000/subjects", newSubject);
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
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-indigo-100 to-blue-50 flex flex-col items-center justify-start p-6">
      {/* Page Content */}
      <div className="w-full max-w-6xl flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-6 drop-shadow">
          🎓 Smart Student Tracker
        </h1>

        <button
          onClick={() => setShowModal(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full shadow-md transition mb-8"
        >
          ➕ Add New Subject
        </button>

        {/* Centered Dashboard */}
        <Dashboard subjects={subjects} onDelete={handleDeleteSubject} />
      </div>

      {showModal && (
        <AddSubjectModal
          onClose={() => setShowModal(false)}
          onAdd={handleAddSubject}
        />
      )}
    </div>
  );
}
