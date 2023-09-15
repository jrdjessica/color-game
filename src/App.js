import React from 'react';
import './App.css';


function Circles() {
  const [numCircles, setNumCircles] = React.useState(4);

  const randomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };

  return (
    <div>
      <button id="circle" style={{ backgroundColor: randomColor() }}></button>
    </div >
  )
}


function App() {
  return (
    <div className="App">
      <Circles />
    </div>
  );
}

export default App;
