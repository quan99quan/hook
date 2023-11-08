import React, { useReducer } from "react";

export default function UseReducer() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
      case "RESET":
        return 1000;
      default:
        return state;
    }
  };
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <div>UseReducer {count}</div>
      <button
        onClick={() => {
          dispatch( {
            type: "INCREMENT",
          });
        }}
      >
        tăng
      </button>
      <button
        onClick={() => {
          dispatch( {
            type: "DECREMENT",
          });
        }}
      >
        tăng
      </button>
      <button
        onClick={() => {
          dispatch( {
            type: "RESET",
          });
        }}
      >
        tăng
      </button>
    </>
  );
}
