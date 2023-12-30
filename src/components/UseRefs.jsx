import React, { useEffect } from "react";
import { useRef } from "react";

function UseRefs() {
  const inputRef = useRef(null);

  useEffect(() => {
    console.log("Component updated", new Date());
  });
  return (
    <div>
      <h1>useRef</h1>
      <p>
        Basically useRef is used when the data should be stored in component but
        is not required to view anywhere OR useRef can be used to submit certain
        data to the backend api rather than using useState.
      </p>
      <input ref={inputRef}></input>
      {/* This will help in optimization and prevent from re-rendering */}
      <br /> <br />
      <button
        onClick={() => {
          console.log(inputRef.current.value);
        }}
      >
        Log
      </button>
    </div>
  );
}

export default UseRefs;

// ## Using useState

// import React, { useEffect, useState } from "react";

// function UseRefs() {
//   const [state, setState] = useState(null);

//   useEffect(() => {
//     console.log("Component updated at", new Date().toDateString());
//   });
//   return (
//     <div>
//       <h1>useRef</h1>
//       <input
//         type="text"
//         placeholder="Type something"
//         onChange={(e) => {
//           setState(e.target.value); // This will always update component as state is changed
//         }}
//       />
//       <br />
//       <br />
//       <button
//         onClick={() => {
//           console.log(state);
//         }}
//       >
//         Log
//       </button>
//     </div>
//   );
// }

// export default UseRefs;
