import React, { useState } from "react";

function TextInput({ setText }) {
  const [input, setInput] = useState("");
  const [submittedText, setSubmittedText] = useState("");

  const handleSubmit = () => {
    setSubmittedText(input);
    setText(input);
  };

  return (
    <div>
      <h2>Text Input</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          if (e.target.value.length <= 50) {
            setInput(e.target.value);
          }
        }}
        placeholder="Enter text (max 50 characters)"
        style={{ marginRight: "10px" }}
      />
      <button onClick={handleSubmit}>Submit</button>
      <p>Submitted Text: {submittedText}</p>
    </div>
  );
}

export default TextInput;