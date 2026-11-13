import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div id="countDiv">
        <p>{count}</p>
      </div>
      <div id="buttons">
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
        <button
          onclick={() => {
            setCount((count = 0));
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
export default App;
