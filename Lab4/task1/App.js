import React from "react";

function App() {
  // Функція обробки кліку
  function handleClick() {
    // Зчитуємо число від користувача через prompt
    const userNumber = prompt("Введіть число від 1 до 5");

    // Генеруємо випадкове число від 1 до 5
    const computerNumber = Math.floor(Math.random() * 5) + 1;

    // Відображаємо результат через alert
    alert(`Ви вказали число: ${userNumber}, число комп’ютера: ${computerNumber}`);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Вкажіть будь-яке число від 1 до 5</h1>
      <button onClick={handleClick} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Почати
      </button>
    </div>
  );
}

export default App;