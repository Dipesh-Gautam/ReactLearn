import React, { useState } from "react";
import { useEffect } from "react";

function UseEffects() {
  const [state, setState] = useState(0);
  const [counter, setCounter] = useState(100);
  function increment() {
    setState(state + 1);
  }

  useEffect(() => {
    console.log("UseEffects function mounted"); //when component is mounted

    return () => {
      console.log("Going to be destroy"); // when component will unmount and re-render
    };
  }, []);

  useEffect(() => {
    console.log("updated", state); // when anything gets updated
  });

  useEffect(() => {
    console.log("Only dependency updated", counter); //only when dependency (i.e counter here) get updated
  }, [counter]);
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={increment}>Increment</button>
      <br />
      <h1>{counter}</h1>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default UseEffects;
