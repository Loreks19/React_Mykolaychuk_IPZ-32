function FruitsCounter({ fruits }) {
    return (
      // Виводимо кількість фруктів на основі довжини масиву fruits
      <h2>Всього фруктів: {fruits.length}</h2>
    );
  }
  
  export default FruitsCounter;