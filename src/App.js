// Sa jucam rock, paper, scissors
// User sa poata selecta din UI una dintre optiuni
// PC alege random o optiune
// 1. Daca dam click pe o optiune , salvam
// 2. Sa aram pe UI ce sa selectat
import React from "react";
import "./styles.css";
import rockImg from "./assets/rock.png";
import paperImg from "./assets/paper.png";
import scissorsImg from "./assets/scissors.png";

export default class App extends React.Component {
  chooseOptionRock() {
    console.log("clicked rock");
  }
  chooseOptionPaper() {
    console.log("clicked paper");
  }
  chooseOptionScissors() {
    console.log("clicked scissors");
  }

  render() {
    const activeElement = {
      backgroundColor: "yellow"
    };

    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <img onClick={this.chooseOptionRock} src={rockImg} alt="rock"></img>
        <img onClick={this.chooseOptionPaper} src={paperImg} alt="paper"></img>
        <img
          onClick={this.chooseOptionScissors}
          src={scissorsImg}
          alt="scissors"
          style={activeElement}
        ></img>
      </div>
    );
  }
}

// https://github.com/bondastefana/SIIT_Bonda_Stefana/blob/master/week5_Rock_Paper_Scissors_Game_JS/app.js
