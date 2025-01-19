import { useState } from "react";
import "./styles.css";

export default function App() {
  const [EndChange, setEndChange] = useState(false);
  const [startChange, setStartChange] = useState(false);
  const toggleColorChange = () => {
    setEndChange(!EndChange);
  };

  const toggleStartColorChange = () => {
    setStartChange(!startChange);
  };

  return (
    <div className="BtnContainer">
      <div>
        <button
          onClick={toggleColorChange}
          className={startChange ? "changeClrRed" : ""}
        >
          Start
        </button>
        &nbsp;
        <button
          onClick={toggleStartColorChange}
          className={EndChange ? "changeClrGrn" : ""}
        >
          End
        </button>
      </div>
    </div>
  );
}
