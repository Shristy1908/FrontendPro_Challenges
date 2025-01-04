import React, { useEffect, memo } from "react";

function Child({ incrementByTwo, fun }) {
  console.log("child component rendered....");
  return <h1>Child Component</h1>;
}

export default memo(Child);
