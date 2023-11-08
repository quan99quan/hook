import React, { useEffect, useState } from "react";

export default function UseEffect() {
  const [count, setCount] = useState(0);
    const [count2, setCount2]=useState(0)
  
    useEffect(() => {
    console.log('UseEffect: ');
    document.getElementById("click").innerText = `U have click ${count} time!`;
    document.getElementById("clck2").innerText = `Click ${count2} time!`;
  },[count]);

  return (
    <>
      <h2 id="click">UseEffect</h2>
      <h2 id="clck2">Test Effect 2</h2>

      <button onClick={() => setCount(count + 1)}>Click me pls!</button>
      {/* <div>U have click {count} time!</div> */}
      
      <button onClick={() => setCount2(count2 + 1)}>Click ok!</button>
    </>
  );
}
