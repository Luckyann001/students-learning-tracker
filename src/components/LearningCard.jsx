import React from "react";
import "../App.css";

const LearningCard = ({ item, onDelete }) => {
  const progress = item.progress || 0;

  return (
    <div className="learning-card">
      <div className="card-header">
        <h3>{item.title}</h3>
        <button className="delete-btn" onClick={onDelete}>
          ✖
        </button>
      </div>

      <p className="category">{item.category}</p>

      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="card-footer">
        <p>{progress}% Complete</p>
        <p>{item.hours} hrs</p>
      </div>
    </div>
  );
};

export default LearningCard;
