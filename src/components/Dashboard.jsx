import React from "react";
import SubjectCard from "./SubjectCard";
import ProgressChart from "./ProgressChart";

export default function Dashboard({ subjects, onDelete }) {
  if (!subjects.length) {
    return (
      <p className="text-center text-gray-600 mt-10 text-lg animate-pulse">
        Loading subjects... please wait ⏳
      </p>
    );
  }

  const avgProgress =
    subjects.reduce((acc, s) => acc + s.progress, 0) / subjects.length;

  return (
    <div className="w-full max-w-5xl flex flex-col items-center">
      {/* Chart Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-10">
        <ProgressChart progress={avgProgress} />
        <div className="text-center">
          <p className="text-2xl font-semibold text-indigo-600">
            Average Progress: {Math.round(avgProgress)}%
          </p>
          <p className="text-gray-500">Keep learning every day 🚀</p>
        </div>
      </div>

      {/* Subject Cards Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center place-items-center">
        {subjects.map((subject) => (
          <SubjectCard key={subject.id} subject={subject} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
}
