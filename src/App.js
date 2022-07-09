import React, { useState } from "react";

export const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1> Welcome to CruiseMazu! </h1>
      <p> You are successfully running it on your machine.</p>
      <div>Counter: {counter} </div>
      <button
        onClick={() =>
          setCounter((prevCount) => {
            return prevCount + 1;
          })
        }
      >
        Increment!
      </button>
      <button
        onClick={() =>
          setCounter((prevCount) => {
            return prevCount - 1;
          })
        }
      >
        Decrement!
      </button>
    </div>
  );
};
