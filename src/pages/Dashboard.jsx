import React, { useEffect, useState } from "react";
import SummaryStats from "../components/SummaryStats";
import LearningCard from "../components/LearningCard";
import AddLearningModal from "../components/AddLearningModal";
import ProgressChart from "../components/ProgressChart";
import "../App.css";

const Dashboard = () => {
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // ✅ Fetch from db.json
  useEffect(() => {
    fetch("http://localhost:3001/learning")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  // ✅ Calculate stats
  const totalItems = items.length;
  const inProgress = items.filter((i) => i.status === "In Progress").length;
  const completed = items.filter((i) => i.status === "Completed").length;
  const totalHours = items.reduce((acc, i) => acc + (i.hours || 0), 0);

  // ✅ Handle adding a new subject
  const handleAdd = (newItem) => {
    setItems([...items, newItem]);
    setShowModal(false);

    // persist to json-server
    fetch("http://localhost:3001/learning", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    });
  };

  // ✅ Handle deleting an item
  const handleDelete = (id) => {
    setItems(items.filter((i) => i.id !== id));
    fetch(`http://localhost:3001/learning/${id}`, { method: "DELETE" });
  };

  return (
    <div className="container">
      {/* Header */}
      <header>
        <h1>🎓 Learning Dashboard</h1>
        <button onClick={() => setShowModal(true)}>+ Add Learning</button>
      </header>

      {/* Summary Stats */}
      <div className="summary-stats">
        <div className="stat-box">
          <p className="stat-title">Total Items</p>
          <p className="stat-value">{totalItems}</p>
        </div>
        <div className="stat-box">
          <p className="stat-title">In Progress</p>
          <p className="stat-value">{inProgress}</p>
        </div>
        <div className="stat-box">
          <p className="stat-title">Completed</p>
          <p className="stat-value">{completed}</p>
        </div>
        <div className="stat-box">
          <p className="stat-title">Total Hours</p>
          <p className="stat-value">{totalHours}</p>
        </div>
      </div>

      {/* Chart Section */}
      <ProgressChart data={items} />

      {/* Cards Section */}
      <div className="cards-grid">
        {items.map((item) => (
          <LearningCard
            key={item.id}
            item={item}
            onDelete={() => handleDelete(item.id)}
          />
        ))}
      </div>

      {/* Add Modal */}
      {showModal && (
        <AddLearningModal
          onClose={() => setShowModal(false)}
          onSave={handleAdd}
        />
      )}
    </div>
  );
};

export default Dashboard;
