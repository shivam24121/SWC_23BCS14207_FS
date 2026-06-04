import { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(1);
  const [clicks, setClicks] = useState(0);

  function handleClick() {
    setClicks((prevClicks) => {
      const newClicks = prevClicks + 1;

      if (newClicks === 3) {
        setCounter((prevCounter) => prevCounter * 2);
        return 0;
      }

      return newClicks;
    });
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Counter: {counter}</h1>

      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}
