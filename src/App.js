import React, { useReducer } from "react";
import { useState } from "react";
import "./style.css";
import { IsOddOrEven, IsOddOrEvenCard } from "./IsOddOrEven";
import {
  DivisibilityCheck2,
  DivisibilityCheck3,
  DivisibilityCheck4,
  DivisibilityCheck5,
  DivisibilityCheck6,
  DivisibilityCheck7,
  DivisibilityCheck8,
  DivisibilityCheck9,
} from "./DivisibilityCheck";
import { RandomCard } from "./RandomCard";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

const countReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT:
      return state + payload;
    case DECREMENT:
      return state - payload;
    case RESET:
      return 0;
    default:
      return state;
  }
};

function increment(dispatch, num) {
  return dispatch({ type: INCREMENT, payload: num });
}
function decrement(dispatch, num) {
  return dispatch({ type: DECREMENT, payload: num });
}
function resett(dispatch) {
  return dispatch({ type: RESET });
}

export function App() {
  const [count, dispatch] = useReducer(countReducer, 0);
  // const [count, setCount] = useState(0);
  const resetCount = () => {
    resett(dispatch);
  };
  const decrementCount = () => {
    decrement(dispatch, 3);
  };
  const incrementCount = () => {
    increment(dispatch, 5);
  };
  const cardvalues = [37, 10, 45, 69];
  const [pickedValue, setPickedValue] = useState(null);
  return (
    <>
      <div className="counter">
        <h1>Counter</h1>
        <h3 className="count">Count: {count}</h3>
        <button className="decrease" onClick={decrementCount}>
          Decrease
        </button>
        <button className="increase" onClick={incrementCount}>
          Increase
        </button>
        <button className="reset" onClick={resetCount}>
          Reset
        </button>
      </div>
      <div>
        <IsOddOrEven count={count} />
        <DivisibilityCheck2 count={count} />
        <DivisibilityCheck3 count={count} />
        <DivisibilityCheck4 count={count} />
        <DivisibilityCheck5 count={count} />
        <DivisibilityCheck6 count={count} />
        <DivisibilityCheck7 count={count} />
        <DivisibilityCheck8 count={count} />
        <DivisibilityCheck9 count={count} />
      </div>
      <div>
        <RandomCard
          cardvalues={cardvalues}
          setPickedValue={setPickedValue}
          pickedValue={pickedValue}
        />
      </div>
      <IsOddOrEvenCard count={count} pickedValue={pickedValue} />
    </>
  );
}
