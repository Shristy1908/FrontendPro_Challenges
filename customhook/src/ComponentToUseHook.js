import { useState } from "react";
import useFetch from "./UseFetch";

function ComponentToUseHook() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      <p>
        <u>Fetched Data</u>
      </p>
      <ul>
        {data.map((data, index) => {
          return <li key={index}>{data.title}</li>;
        })}
      </ul>
    </>
  );
}
export default ComponentToUseHook;
