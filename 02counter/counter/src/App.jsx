import React, { useState } from "react";
import "./index.css";

function App() {
  const [counter, setCounter] = useState(5);

  const increaseValue = () => {
    if (counter !== 15) {
      setCounter(counter + 1);
    } else {
      alert("The counter can't be more than 15");
    }
  };

  const decreaseValue = () => {
    if (counter !== 0) {
      setCounter(counter - 1);
    } else {
      alert("The counter can't be negative");
    }
  };

  return (
    <div className="app">
      <div className="card">
        <h1 className="title">Counter</h1>
        <p className="count">{counter}</p>
        <div className="controls">
          <button onClick={increaseValue}>Increase</button>
          <button onClick={decreaseValue}>Decrease</button>
        </div>
      </div>
    </div>
  );
}

export default App;
