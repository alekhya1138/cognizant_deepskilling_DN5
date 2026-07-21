import React from "react";
import CalculateScore from "./Components/CalculateScore";

function App() {
  return (
    <div>
      <CalculateScore
        Name="R Sai Naga Alekhya"
        School="VIT-AP University"
        Total={450}
        Goal={5}
      />
    </div>
  );
}

export default App;