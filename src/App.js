import React from "react";
import "./styles.css";
import rockImg from "./assets/rock.png";
import paperImg from "./assets/paper.png";
import scissorsImg from "./assets/scissors.png";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <img src={rockImg} alt="rock"></img>
      <img src={paperImg} alt="paper"></img>
      <img src={scissorsImg} alt="scissors"></img>
    </div>
  );
}
