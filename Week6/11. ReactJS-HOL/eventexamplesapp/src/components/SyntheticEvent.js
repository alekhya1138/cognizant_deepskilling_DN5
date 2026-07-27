import React from "react";

function SyntheticEvent() {
  const handleClick = (e) => {
    alert("I was clicked");
  };

  return (
    <div>
      <button onClick={handleClick}>
        Synthetic Event Button
      </button>
    </div>
  );
}

export default SyntheticEvent;