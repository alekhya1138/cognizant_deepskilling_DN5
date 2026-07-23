import React from "react";

function ListofPlayers() {
  const players = [
    { name: "Virat", score: 85 },
    { name: "Rohit", score: 60 },
    { name: "Gill", score: 45 },
    { name: "Rahul", score: 72 },
    { name: "Pant", score: 90 },
    { name: "Hardik", score: 65 },
    { name: "Jadeja", score: 50 },
    { name: "Ashwin", score: 40 },
    { name: "Shami", score: 30 },
    { name: "Bumrah", score: 55 },
    { name: "Siraj", score: 25 }
  ];

  // map()
  const allPlayers = players.map((p, index) => (
    <li key={index}>
      {p.name} - {p.score}
    </li>
  ));

  // filter using arrow function
  const lowScorePlayers = players
    .filter((p) => p.score < 70)
    .map((p, index) => (
      <li key={index}>
        {p.name} - {p.score}
      </li>
    ));

  return (
    <div>
      <h2>All Players</h2>
      <ul>{allPlayers}</ul>

      <h2>Players with Score below 70</h2>
      <ul>{lowScorePlayers}</ul>
    </div>
  );
}

export default ListofPlayers;