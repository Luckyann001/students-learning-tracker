import React from "react";

export default function Navbar({ onAdd }) {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Student Tracker</h1>
      <button className="add-btn" onClick={onAdd}>+ Add Subject</button>
    </nav>
  );
}
