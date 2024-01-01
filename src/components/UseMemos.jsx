import React, { useState } from "react";
import { useMemo } from "react";

function UseMemos() {
  const [word, setWord] = useState("Hello");
  const [value, setValue] = useState(0);

  const countLetter = (word) => {
    let i = 0;
    while (i < 1000000000) i++;
    return word.length;
  };
  // const letterLength = countLetter(word);
  const letterLength = useMemo(() => countLetter(word), [word]); //useMemo helps to memorize. It helps to in optimization.
  return (
    <div>
      <h1>useMemo</h1>
      <p>
        {word} has {letterLength} letters
      </p>
      <button
        onClick={() => {
          setWord("" + Math.random());
        }}
      >
        Next word
      </button>
      <p>{value}</p>
      <button onClick={() => setValue(value + 1)}>Increment</button>
    </div>
  );
}

export default UseMemos;
