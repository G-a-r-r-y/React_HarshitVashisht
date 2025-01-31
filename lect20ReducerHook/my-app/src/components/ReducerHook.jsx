import React from "react";
import { useReducer } from "react";

function reducer(state, action) {
  console.log(state, action);
  if (action.type === "INCREAMENT") {
    return { ...state, count: state.count + 1 };
  }
  if (action.type === "RESET") {
    return { ...state, count: 0 };
  }
  if (action.type === "DECREAMENT") {
    return { ...state, count: state.count - 1 };
  }
  return state;
}

const initialState = { count: 0, firstName: "harshit" };

function ReducerHook() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleIncrease() {
    dispatch({
      type: "INCREAMENT",
    });
  }

  function handleReset() {
    dispatch({
      type: "RESET",
    });
  }

  function handleDecrease() {
    dispatch({
      type: "DECREAMENT",
    });
  }

  return (
    <>
      <h1>Name: {state.firstName}</h1>
      <h1>Count: {state.count}</h1>
      <button onClick={handleIncrease}>increase</button>
      <button onClick={handleReset}>reset</button>
      <button onClick={handleDecrease}>decrease</button>
    </>
  );
}

export default ReducerHook;
