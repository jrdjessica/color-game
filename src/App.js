import React from 'react';
import './App.css';


function Circles() {
  const [numCircles, setNumCircles] = React.useState(4);

  const randomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };

  const circleElements = [];
  for (let i = 0; i < numCircles; i++) {
    circleElements.push(
      <button
        key={i}
        id="circle"
        className="circle"
        style={{ backgroundColor: randomColor() }}
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
