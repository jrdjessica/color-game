import React from 'react';
import './App.css';


function Circles() {
  const [numCircles, setNumCircles] = React.useState(6);
  const [difIndexCircle, setDifIndexCircle] = React.useState(null);
  const [randomColor, setRandomColor] = React.useState('black');
  const [score, setScore] = React.useState(0);
  const [gameStatus, setGameStatus] = React.useState('start')

  const circleElements = [];

  const restartGame = () => {
    setScore(0);
    setNumCircles(6);
    setDifIndexCircle(null);
    setRandomColor('black');
    setGameStatus('play');
  }

  const resetLevel = (i) => {
    if (difIndexCircle === i) {
      setScore(score + 1)
    } else {
      setGameStatus('end')
    };

    if (score && score % 5 === 0) {
      setNumCircles(numCircles + 2)
    };

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
    <div>
      {gameStatus === 'end' ? (
        <div>
          <h2>Game Over</h2>
          <h3>Final Score: {score}</h3>
          <button onClick={() => restartGame()}>Restart</button>
        </div>
      ) : gameStatus === 'start' ? (
        <div>
          <h2>How to play</h2>
          <button onClick={() => setGameStatus('play')}>Start</button>
        </div>
      ) : (<div key={containerKey}>
        Score: {score}
        <div className="circle-container">{circleElements}</div>
      </div>
      )}
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
