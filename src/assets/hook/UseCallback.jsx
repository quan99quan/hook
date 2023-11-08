import React, { useCallback, useEffect, useState } from "react";
import Temp from "./Temp";

export default function UseCallback() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const printCount = useCallback(() => {
    alert(count);
  }, [count]);
  useEffect(() => {
    console.log("kich hoat");
  }, [printCount]);
  return (
    <>
      <div>UseCallback</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        tang count{count}
      </button>
      <button
        onClick={() => {
          setCount2(count2 + 1);
        }}
      >
        tang count 2 {count2}
      </button>
      <button
        onClick={() => {
          printCount();
        }}
      >
        printCount
      </button>
      <Temp printCount={printCount} />
    </>
  );
}
