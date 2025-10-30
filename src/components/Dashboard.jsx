<main className="dashboard">
  <div className="dashboard-container">
    <h2 className="section-title">Your Learning Progress</h2>

    <div className="chart-section">
      <ProgressChart subjects={subjects} />
    </div>

    <div className="subject-sections">
      <div className="section">
        <h3 className="section-title">Completed Subjects ✅</h3>
        <SubjectList subjects={completed} />
      </div>

      <div className="section">
        <h3 className="section-title">In Progress 📘</h3>
        <SubjectList subjects={inProgress} />
      </div>
    </div>
  </div>
</main>
