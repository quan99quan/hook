// import React from 'react'
// import { useState } from 'react';
// export default function UseState() {
//     const [count,setCount]=useState(0);

//   return (
// <>
// <div>useState {count}</div>
//     <button onClick={()=>{
//         setCount(count+1)
//     }}>click</button>

// </>
//   )
// }
import React from "react";

export default function useState() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>useState {count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click
      </button>
    </>
  );
}
