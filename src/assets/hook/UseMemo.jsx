import React, { useMemo, useState } from "react";

export default function UseMemo() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState([1, 2, 3, 4, 5]);

  const sum = useMemo(() => {
    console.log("Calculating sum");
    return (
      number?.reduce(
        (accumulator, currentValue) =>
        (accumulator += currentValue)
        ,0
      )  
    );
  }, [number]);

  return (
    <>
      <div>UseMemo</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click {count}
      </button>
      <button
        onClick={() => {
          setNumber([...number,10]);
        }}
      >
        Add Number
      </button>
      <div>Sum: {sum}</div>
    </>
  );
}
