import React, { useEffect, useState } from "react";
import axios from "axios";
import SubjectList from "./SubjectList";

export default function Dashboard() {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    axios.get("https://json-server-vercel-dun-beta.vercel.app/students").then((res) => setSubjects(res.data));
  }, []);

  return (
    <main className="dashboard">
      <h2 className="section-title">Your Subjects</h2>
      <SubjectList subjects={subjects} />
    </main>
  );
}
