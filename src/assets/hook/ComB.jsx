import React, { useContext } from "react";
import { box } from "./UseContext";

export default function ComB() {
  const value = useContext(box);

  return (
    <div>
      ComB {value.size.typeA} {value.size.typeB}
    </div>
  );
}
