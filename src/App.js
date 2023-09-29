import React from 'react';
import './App.css';


function Circles() {

  const randomInt = () => Math.floor(Math.random() * numCircles)

  const randomHexColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16)

  const [numCircles, setNumCircles] = React.useState(6);
  const [difIndexCircle, setDifIndexCircle] = React.useState(randomInt(numCircles));
  const [randomColor, setRandomColor] = React.useState(randomHexColor());
  const [score, setScore] = React.useState(0);
  const [gameStatus, setGameStatus] = React.useState('start')
  const [message, setMessage] = React.useState('');
  const [highScore, setHighScore] = React.useState(0)

  const circleElements = [];

  const restartGame = () => {
    setScore(0);
    setNumCircles(6);
    setRandomColor(randomHexColor());
    setDifIndexCircle(randomInt(numCircles));
    setGameStatus('play');
  }

  const resetLevel = (i) => {
    if (difIndexCircle === i) {
      setScore(score + 1)
    } else {
      setGameStatus('end');
      setMessage('Sorry, game over');
      if (score > highScore) {
        setHighScore(score);
      }
    };

    if (score && score % 5 === 0) {
      setNumCircles(numCircles + 2)
    };

    setRandomColor(randomHexColor());
    setDifIndexCircle(randomInt(numCircles));
  }

  React.useEffect(() => { localStorage.setItem('highScore', JSON.stringify(highScore)); }, [highScore])

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
          <h2>{message}</h2>
          <h3>Final Score: {score}</h3>
          <button onClick={() => restartGame()}>Restart</button>
        </div>
      ) : gameStatus === 'start' ? (
        <div>
          <h2>How to play</h2>
          <button onClick={() => setGameStatus('play')}>Start</button>
        </div>
      ) : (<div key={containerKey}>
        High Score: {highScore}
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
