import React, { useCallback, useEffect, useState } from "react";
const Child = React.lazy(() => import("../Child"));

function App() {
  const [incrementByOne, setIncrementByOne] = useState(0);
  const [incrementByTwo, setDecrementByTwo] = useState(0);
  const [isEven, setIsEven] = useState();

  const handleIncrementByOne = () => {
    setIncrementByOne(incrementByOne + 1);
    console.log("Increment by one clicked");
  };

  // const handleIncrementByTwo = () => {
  //   setDecrementByTwo(incrementByTwo + 2);
  //   console.log("Increment by two clicked");
  // };

  const fun = useCallback(() => {
    console.log("function call");
  }, [incrementByTwo]);

  // const fun = () => {
  //   console.log("function call");
  // };

  return (
    <div>
      <Child incrementByTwo={incrementByTwo} fun={fun} />
      <button onClick={handleIncrementByOne}>
        Increment by one - {incrementByOne}
      </button>
      {/* <button onClick={handleIncrementByTwo}>
        Increment by two - {incrementByTwo}
      </button> */}
    </div>
  );
}

export default App;
