import React from 'react';
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
      <button id="circle" style={circleStyle}></button>
    </div >
  )
}


function App() {
  const [numCircles, setNumCircles] = React.useState(4)
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
