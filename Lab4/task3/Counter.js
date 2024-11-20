import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState("");

  const increase = () => {
    setError("");
    setCount((prev) => prev + 1);
  };

  const decrease = () => {
    if (count <= 0) {
      setError("Counter can't be negative");
    } else {
      setError("");
      setCount((prev) => prev - 1);
    }
  };

  const reset = () => {
    setError("");
    setCount(0);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={increase} style={{ marginRight: "10px" }}>
        Increase
      </button>
      <button onClick={decrease} style={{ marginRight: "10px" }}>
        Decrease
      </button>
      <button onClick={reset}>Reset</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default Counter;