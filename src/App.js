import React from 'react';
import './App.css';


function Circles() {
  const [numCircles, setNumCircles] = React.useState(8);
  const [difIndexCircle, setDifIndexCircle] = React.useState(null)
  const [randomColor, setRandomColor] = React.useState('black');
  const [score, setScore] = React.useState(0)

  const circleElements = [];

  const resetLevel = (i) => {
    if (difIndexCircle === i) {
      setScore(score + 1)
    }

    setRandomColor('#' + Math.floor(Math.random() * 16777215).toString(16));
    setDifIndexCircle(Math.floor(Math.random() * numCircles));
  }

  for (let i = 0; i < numCircles; i++) {
    const circleColor = i === difIndexCircle ? 'red' : randomColor

    circleElements.push(
      <button
        key={i}
        id={i}
        className="circle"
        style={{ backgroundColor: circleColor }}
        onClick={() => resetLevel(i)}
      ></button>
    );
  }

  const containerKey = `container-${difIndexCircle}`;

  return (
    <div key={containerKey}>
      Score: {score}
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
