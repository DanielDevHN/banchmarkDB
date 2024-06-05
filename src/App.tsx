import { useState } from "react";
import firebaseLogo from "./assets/firebase.svg";
import mongodbLogo from "./assets/mongodb.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://firebase.google.com/" target="_blank">
          <img src={firebaseLogo} className="logo direbase" alt="Firebase logo" />
        </a>
        <a href="https://www.mongodb.com/" target="_blank">
          <img src={mongodbLogo} className="logo mongodb" alt="MongoDB logo" />
        </a>
      </div>
      <h1>BenchmarkDB</h1>
      <h2>Firebase - MongoDB</h2>
      <div className="card">
        <label htmlFor="select" className="label">Selecciona la base de datos:</label>
        <br />
        <select
          className="select"
          name="select"
          id="select"
          onChange={(e) => console.log(e.target.value)}
        >
          <option value="firebase">Firebase</option>
          <option value="mongodb">MongoDB</option>
        </select>
        <hr />
        <button onClick={() => setCount(count + 1)} className="button">
          Insertar Data
        </button>
      </div>
      <p>Tiempo de ejecución: {count}ms</p>
      <p>Tiempo transcurrido: {count}ms</p>
    </>
  );
}

export default App;
