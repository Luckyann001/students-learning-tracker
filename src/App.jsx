import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import StudentList from "./components/StudentList";
import AddStudentForm from "./components/AddStudentForm";
import ProgressChart from "./components/ProgressChart";
import StudentProgressHistory from "./components/StudentProgressHistory";

function App() {
  const [students, setStudents] = useState([]);

  // Fetch data from your deployed backend (json-server or Render)
  useEffect(() => {
    fetch("https://json-server-vercel-a7hx.vercel.app/students")
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  const addStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  return (
    <div className="app">
      <Header />
      <div className="layout">
        <Sidebar />
        <main className="content">
          <Dashboard students={students} />
          <div className="grid">
            <StudentList students={students} />
            <AddStudentForm onAdd={addStudent} />
          </div>
          <ProgressChart averageProgress={students.length > 0 ? 
            Math.round(students.reduce((a, s) => a + s.progress, 0) / students.length) : 0} 
          />
        </main>
      </div>
    </div>
  );
}

export default App;
