import React from "react";
import "../Stylesheets/mystyle.css";

function CalculateScore(props) {
  const average = props.Total / props.Goal;

  return (
    <div className="container">
      <h1>Student Management Portal</h1>

      <div className="card">
        <p><strong>Student Name :</strong> {props.Name}</p>
        <p><strong>School :</strong> {props.School}</p>
        <p><strong>Total Marks :</strong> {props.Total}</p>
        <p><strong>Number of Subjects :</strong> {props.Goal}</p>
        <p><strong>Average Score :</strong> {average}</p>
      </div>
    </div>
  );
}

export default CalculateScore;