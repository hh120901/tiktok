// import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [number, setnumber] = useState(0);
  const increase = () => (console.log(number), setnumber(number + 1));
  const decrease = () => (console.log(number), setnumber(number - 1));
  useEffect(() => {
    console.log("effect");
  }, []);

  return (
    <div className="App">
      <h1>REACT JS</h1>
      <h2>{number || "0"}</h2>
      <button onClick={increase} style={{ margin: 10 }}>
        Increase
      </button>
      <button onClick={decrease} style={{ margin: 10 }}>
        Decrese
      </button>
    </div>
  );
}

export default App;
