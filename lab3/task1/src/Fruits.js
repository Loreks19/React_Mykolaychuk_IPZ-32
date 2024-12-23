import React from "react";

function Fruits({ fruits }) {
  return (
    <div>
      {/* Виводимо список фруктів, які приходять через пропси */}
      {fruits.map((f) => (
        <p key={f.id}>{f.fruitName}</p>
      ))}
    </div>
  );
}

export default Fruits;