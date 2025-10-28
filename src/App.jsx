import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import AddSubjectModal from "./components/AddSubjectModal";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <Navbar onAdd={() => setShowModal(true)} />
      <Dashboard />
      {showModal && <AddSubjectModal onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default App;
