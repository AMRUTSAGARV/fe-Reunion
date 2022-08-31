import logo from "./logo.svg";
import "./App.css";
import Child from "./components/Child";
import { useEffect, useState } from "react";

function App() {
  // const apiurl = ;

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos").then((res) => {
      res.json().then((res) => setData(res));
    });
  }, []);

  return (
    <div className="App">
      {data.map((i) => {
        return (
          <table>
            <tr>
              <th>{i.id}</th>
              <th>{i.title}</th>
            </tr>
          </table>
        );
      })}
    </div>
  );
}

export default App;
