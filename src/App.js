import React from 'react';
import './App.css';


function Circles() {
  const [numCircles, setNumCircles] = React.useState(4);
  const [difIndexCircle, setDifIndexCircle] = React.useState(null)
  const [randomColor, setRandomColor] = React.useState('black');

  const circleElements = [];

  for (let i = 0; i < numCircles; i++) {
    const circleColor = i === difIndexCircle ? 'red' : randomColor

    const resetColors = () => {
      setRandomColor('#' + Math.floor(Math.random() * 16777215).toString(16));
      setDifIndexCircle(Math.floor(Math.random() * numCircles));
    }

    circleElements.push(
      <button
        key={i}
        id="circle"
        className="circle"
        style={{ backgroundColor: circleColor }}
        onClick={resetColors}
      ></button>
    );
  }

  return (
    <div>
      <div className="circle-container">{circleElements}</div>
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <Circles />
    </div>
  );
}

export default App;
