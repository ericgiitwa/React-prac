import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div id="darkMode-div">
        <button
          onClick={() => {
            if (
              document.getElementById("root").style.backgroundColor == "white"
            ) {
              document.getElementById("root").style.backgroundColor = "grey";
            } else if (
              document.getElementById("root").style.backgroundColor == "grey"
            ) {
              document.getElementById("root").style.backgroundColor = "white";
            }
          }}
        >
          Dark Mode
        </button>
      </div>
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
          onClick={() => {
            setCount(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
