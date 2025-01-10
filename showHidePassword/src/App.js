import React, { useState } from "react";
import "./styles.css";
import { IoEye, IoEyeOff } from "react-icons/io5";

export default function App() {
  const [showPassword, setShowPassword] = useState(true);
  const toggleIcon = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="App">
      <nav className="nav">
        <div className="passDiv">
          <input
            type={showPassword ? "password" : "text"}
            placeholder="Password"
          />
          {showPassword ? (
            <IoEye onClick={toggleIcon} />
          ) : (
            <IoEyeOff onClick={toggleIcon} />
          )}
        </div>
      </nav>
    </div>
  );
}
