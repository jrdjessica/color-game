import logo from './logo.svg';
import './App.css';

function ChooseColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
}

function Circles() {
  return (
    <div>
      <div id="circle"></div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Circles />
      <ChooseColor />
    </div>
  );
}

export default App;
