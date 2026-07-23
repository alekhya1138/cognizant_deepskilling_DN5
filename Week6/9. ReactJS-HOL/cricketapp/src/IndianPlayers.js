import React from "react";

function IndianPlayers() {
  const players = ["Virat", "Rohit", "Gill", "Rahul", "Pant", "Hardik"];

  // destructuring odd/even
  const oddPlayers = players.filter((_, index) => index % 2 !== 0);
  const evenPlayers = players.filter((_, index) => index % 2 === 0);

  // merging arrays
  const T20players = ["Virat", "Rohit"];
  const RanjiPlayers = ["Pujara", "Rahane"];

  const mergedPlayers = [...T20players, ...RanjiPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        {oddPlayers.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        {evenPlayers.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>

      <h2>Merged Players</h2>
      <ul>
        {mergedPlayers.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
}

export default IndianPlayers;