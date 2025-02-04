import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api")
      .then((response) => response.json())
      .then((result) => {
        setData(result.results);
      });

    console.log(data);
  }, []);

  return (
    <div className="App">
      <h1>API Data</h1>

      {data.map((data, index) => (
        <div key={index}>
          <p>{`${data.name.title} ${data.name.first} ${data.name.last}`}</p>
          <img src={data.picture.large} alt="Picture" />
        </div>
      ))}
    </div>
  );
}
