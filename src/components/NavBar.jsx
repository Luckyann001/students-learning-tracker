import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>📘 StudyTrack</h1>
      <div className="profile">
        <img src="https://i.pravatar.cc/40" alt="profile" />
        <span>Hi, Student!</span>
      </div>
    </nav>
  );
};

export default Navbar;
