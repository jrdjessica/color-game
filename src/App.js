import React from 'react';
import './App.css';


function Circles() {
  const [numCircles, setNumCircles] = React.useState(4);
  const [difIndexCircle, setDifIndexCircle] = React.useState('')
  const [randomColor, setRandomColor] = React.useState('black');
  const [score, setScore] = React.useState(0)

  const circleElements = [];

  for (let i = 0; i < numCircles; i++) {
    const circleColor = i === difIndexCircle ? 'red' : randomColor

    const resetLevel = () => {
      if (difIndexCircle === i) {
        setScore(score + 1)
      }

      setRandomColor('#' + Math.floor(Math.random() * 16777215).toString(16));
      setDifIndexCircle(Math.floor(Math.random() * numCircles));
      console.log(i)
    }

    circleElements.push(
      <button
        key={i}
        id="circle"
        className="circle"
        style={{ backgroundColor: circleColor }}
        onClick={resetLevel}
      ></button>
    );
  }

  return (
    <div>
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
