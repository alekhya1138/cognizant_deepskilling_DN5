import React from "react";
import CohortDetails from "./CohortDetails";

function App() {
  return (
    <div>
      <h1>Cohort Dashboard</h1>

      <CohortDetails
        name="React Training"
        status="ongoing"
        startDate="10 July 2026"
      />

      <CohortDetails
        name="Java Training"
        status="completed"
        startDate="1 June 2026"
      />
    </div>
  );
}

export default App;