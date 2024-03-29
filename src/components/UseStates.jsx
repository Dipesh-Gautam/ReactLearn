import React, { useState } from "react";

function UseStates() {
  const [state, setState] = useState(0);

  function increment() {
    setState((prevCount) => prevCount + 1);
  }

  function decrement() {
    setState(state - 1);
  }

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default UseStates;
