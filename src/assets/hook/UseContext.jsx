import React, {createContext} from "react";
import ComB from "./ComB";
export   const box = createContext();
export default function UseContext() {
  
  const data = {
    name: "John",
    age: 25,
    city: "New York",
    size: {
      typeA: "S",
      typeB: "M",
      typeC: "L",
    },
  };
  return (
    <>
      <div>UseContext</div>

      <box.Provider value={data}>
        <ComB />
      </box.Provider>
    </>
  );
}
