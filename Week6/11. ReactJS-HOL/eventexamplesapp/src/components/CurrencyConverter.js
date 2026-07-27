import React, { useState } from "react";

function CurrencyConverter() {
  const [rupees, setRupees] = useState("");
  const [euro, setEuro] = useState("");

  const handleSubmit = () => {
    const rate = 0.011; // Example conversion
    setEuro((rupees * rate).toFixed(2));
  };

  return (
    <div>
      <h2>Currency Converter (₹ → €)</h2>
      <input
        type="number"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
        placeholder="Enter Rupees"
      />
      <button onClick={handleSubmit}>Convert</button>
      <h3>Euro: €{euro}</h3>
    </div>
  );
}

export default CurrencyConverter;