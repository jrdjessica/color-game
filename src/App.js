import logo from './logo.svg';
import './App.css';

function ChooseColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
}

function Circles() {
  const circleStyle = {
    height: "25px",
    width: "25px",
    backgroundColor: "blue",
    borderRadius: "50%",
    display: "inline-block",
  }
  return (
    <div>
      <div id="circle" style={circleStyle}></div>
    </div >
  )
}

function App() {
  const numCircles = 5
  const circles = Array.from({ length: numCircles }, (_, index) => (
    <Circles key={index} />
  ));

  return (
    <div className="App">
      {circles}
    </div>
  );
}

export default App;
