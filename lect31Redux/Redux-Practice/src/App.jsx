import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  increament,
  decreament,
  reset,
} from "./features/counters/counterSlice";

function App() {
  const { count } = useSelector((state) => {
    return state.counter;
  });

  const dispatch = useDispatch();

  return (
    <>
      <h2>count:{count}</h2>
      <button
        onClick={() => {
          dispatch(increament());
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset{" "}
      </button>
      <button
        onClick={() => {
          dispatch(decreament());
        }}
      >
        Decrease
      </button>
    </>
  );
}

export default App;
