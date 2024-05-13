import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./CounterSlice";
import { useState } from "react";
import { showName } from "./count";

const Counter = () => {
  const count = useSelector((state) => state.counter);
  const countHeading = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <input
        type="text"
        placeholder="enter your name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />

      <button
        onClick={() => {
          dispatch(showName(name));
          setName("");
        }}
      >
        Add your name
      </button>

      <h1>{countHeading}</h1>
    </div>
  );
};

export default Counter;
