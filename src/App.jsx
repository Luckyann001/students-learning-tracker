import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import AddLearning from "./pages/AddLearning";
import "./App.css";

function App() {
  const [subjects, setSubjects] = useState([]);

  // 🔗 Replace this URL with your actual Render backend URL
  const backendUrl = "https://json-server-vercel-psi-olive.vercel.app/subjects";

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await fetch(backendUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch subjects");
        }
        const data = await response.json();
        setSubjects(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchSubjects();
  }, [backendUrl]);

  const addSubject = (newSubject) => {
    setSubjects((prev) => [...prev, newSubject]);
  };

  return (
    <Router>
      <NavBar />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Dashboard subjects={subjects} />} />
          <Route path="/add" element={<AddLearning addSubject={addSubject} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
