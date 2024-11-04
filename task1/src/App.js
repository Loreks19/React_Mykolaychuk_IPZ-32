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
    </div>
  );
}

export default App;