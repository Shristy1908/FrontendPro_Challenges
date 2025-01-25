import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [currentMode, setCurrentMode] = useState("light");

  const toggleMode = () => {
    setCurrentMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.className = currentMode;
  }, [currentMode]);

  return (
    <div className="App">
      <h1>Shristy Kumari</h1>
      <button onClick={toggleMode}>
        {currentMode === "light"
          ? "Change to Dark Mode"
          : "Change to light Mode"}
      </button>
    </div>
  );
}
