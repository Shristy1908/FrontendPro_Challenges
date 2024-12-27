import "./trafficLight.css";
import React, { useState, useEffect } from "react";

const light = {
  red: "red",
  green: "green",
  yellow: "yellow",
};

const TrafficLight = () => {
  const [active, setActive] = useState(light.green);

  useEffect(() => {
    switch (active) {
      case light.red:
        setTimeout(() => {
          setActive(light.yellow);
        }, 4000);
        break;
      case light.yellow:
        setTimeout(() => {
          setActive(light.green);
        }, 500);
        break;
      case light.green:
        setTimeout(() => {
          setActive(light.red);
        }, 3000);
        break;
    }
  }, [active]);

  return (
    <>
      <h1>Traffic Light</h1>
      <div className="wrapper">
        <div
          className="green light"
          style={active !== light.green ? { opacity: 0.5 } : null}
        >
          A
        </div>
        <div
          className="yellow light"
          style={active !== light.yellow ? { opacity: 0.5 } : null}
        >
          B
        </div>
        <div
          className="red light"
          style={active !== light.red ? { opacity: 0.5 } : null}
        >
          C
        </div>
      </div>
    </>
  );
};

export default TrafficLight;
