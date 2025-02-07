import { useEffect, useState } from "react";
import "./styles.css";

// Create a timer app.
// Implement a basic counter having "START" and "STOP" functionality
// Only "START" button should only be visible during the initial load or when the user has clicked on "STOP"
// "STOP" buttons should only be visible once the user has clicked on "START" button

export default function App() {
  const [time, setTime] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  function outer() {
    let vari = 0;
    return function inner() {
      vari++;
      console.log(vari);
    };
  }

  useEffect(() => {
    let timer;
    if (timerRunning) {
      timer = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [timerRunning]);

  return (
    <div className="App">
      <p>Timer: {time}</p>

      <button onClick={() => setTimerRunning(true)}>Start</button>
      <button onClick={() => setTimerRunning(false)}>Stop</button>
    </div>
  );
}
