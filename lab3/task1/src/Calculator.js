import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  // Стани для вводу та результату
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  // Обробники для кнопок
  const handleButtonClick = (value) => {
    setInput(input + value); // Додаємо значення до вводу
  };

  const handleOperation = (operation) => {
    try {
      switch (operation) {
        case "add":
          setResult(result + parseFloat(input));
          break;
        case "subtract":
          setResult(result - parseFloat(input));
          break;
        case "multiply":
          setResult(result * parseFloat(input));
          break;
        case "divide":
          if (parseFloat(input) !== 0) {
            setResult(result / parseFloat(input));
          } else {
            alert("Cannot divide by zero!");
          }
          break;
        default:
          break;
      }
      setInput(""); // Очищаємо ввід після операції
    } catch (error) {
      alert("Invalid operation");
    }
  };

  const resetInput = () => {
    setInput(""); // Очищаємо ввід
  };

  const resetResult = () => {
    setResult(0); // Очищаємо результат
  };

  return (
    <div>
      <h2> Simplest Working Calculator </h2>
      <div>
        <input type="text" value={input} readOnly />
        <p>Result: {result}</p>
        <div>
          <button onClick={() => handleButtonClick("1")}>1</button>
          <button onClick={() => handleButtonClick("2")}>2</button>
          <button onClick={() => handleButtonClick("3")}>3</button>
          <button onClick={() => handleButtonClick("4")}>4</button>
          <button onClick={() => handleButtonClick("5")}>5</button>
          <button onClick={() => handleButtonClick("6")}>6</button>
          <button onClick={() => handleButtonClick("7")}>7</button>
          <button onClick={() => handleButtonClick("8")}>8</button>
          <button onClick={() => handleButtonClick("9")}>9</button>
          <button onClick={() => handleButtonClick("0")}>0</button>
        </div>
        <div>
          <button onClick={() => handleOperation("add")}>add</button>
          <button onClick={() => handleOperation("subtract")}>subtract</button>
          <button onClick={() => handleOperation("multiply")}>multiply</button>
          <button onClick={() => handleOperation("divide")}>divide</button>
        </div>
        <div>
          <button onClick={resetInput}>reset input</button>
          <button onClick={resetResult}>reset result</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;