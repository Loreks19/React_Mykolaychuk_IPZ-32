import './App.css';
import Heading from './Heading';
import {Subject} from './Subject';
import {Card} from './Subject';

function App() {
  return (
    <div className="subject">
      <Heading firstName="Ярослав" />
      <h1>Список ваших дисциплін у семестрі:</h1>
      <Subject subjectName="React Native" description="A framework for web-development"></Subject>
      <Card description="Вибіркова дисципліна"></Card>
      <Subject subjectName="Java Script" description="A program language for web-development"></Subject>
      <Card description="Вибіркова дисципліна"></Card>
      <Subject subjectName="Web-design" description="subject about creating web-sites"></Subject>
      <Card description="Обов'язкова дисципліна"></Card>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Вкажіть будь-яке число від 1 до 5</h1>
      <button onClick={handleClick} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Почати
      </button>
    </div>
    </div>
    
  );
  function handleClick() {
    // Зчитуємо число від користувача через prompt
    const userNumber = prompt("Введіть число від 1 до 5");

    // Генеруємо випадкове число від 1 до 5
    const computerNumber = Math.floor(Math.random() * 5) + 1;

    // Відображаємо результат через alert
    alert(`Ви вказали число: ${userNumber}, число комп’ютера: ${computerNumber}`);
  }

}

export default App;