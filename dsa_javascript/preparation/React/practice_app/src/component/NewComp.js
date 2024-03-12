import React, { useState } from "react";
import CounterApp from "./CounterApp";

const NewComp = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <CounterApp send={count} />
      <button onClick={() => decrease()}>Decrement</button>
      <br />
      <button onClick={() => increase()}>Increment</button>
      {count}
    </div>
  );
};

export default NewComp;
