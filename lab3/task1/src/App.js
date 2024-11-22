import React, { useState } from "react";
import Counter from "./Counter";
import TextInput from "./TextInput";

function App() {
  const [text, setText] = useState("");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>React Application</h1>
      <Counter />
      <TextInput setText={setText} />
      <p>Number of characters: {text.length}</p>
    </div>
  );
}

export default App;

