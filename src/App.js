// Sa jucam rock, paper, scissors
// User sa poata selecta din UI una dintre optiuni
// PC alege random o optiune
// 1. Daca dam click pe o optiune , salvam
// 2. Sa aram pe UI ce sa selectat
// 3. Sa afisam castigatorul
import React from "react";
import "./styles.css";
import rockImg from "./assets/rock.png";
import paperImg from "./assets/paper.png";
import scissorsImg from "./assets/scissors.png";

function getWiner(compChoice, userChoice) {
  if (compChoice === "rock" && userChoice === "paper") {
    return "User wins!";
  } else if (compChoice === "paper" && userChoice === "rock") {
    return "Computer wins!";
  } else if (compChoice === "paper" && userChoice === "scissors") {
    return "User wins!";
  } else if (compChoice === "scissors" && userChoice === "paper") {
    return "Computer wins!";
  } else if (compChoice === "rock" && userChoice === "scissors") {
    return "Computer wins!";
  } else if (compChoice === "scissors" && userChoice === "rock") {
    return "User wins!";
  } else {
    return "Equality";
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userChoice: "init",
      computerChoice: "init"
    };

    this.arrayGame = ["rock", "paper", "scissors"];
  }
  // Joaca jocul
  // 1. Alege random optiune pentru pc
  // 2. Decide cine a castigat
  play() {
    let computerChoice = this.arrayGame[
      Math.floor(Math.random() * this.arrayGame.length)
    ];
    this.setState({ computerChoice: computerChoice });
    console.log("---------- start game ---------------");
    console.log("computerChoice=", computerChoice);
    console.log("userChoice=", this.state.userChoice);
    console.log("winner=", getWiner(computerChoice, this.state.userChoice));
    console.log("---------- end game ---------------");
  }

  chooseOptionRock = () => {
    this.setState({ userChoice: "rock" }, () => {
      this.play();
    });
  };

  chooseOptionPaper = () => {
    this.setState({ userChoice: "paper" }, () => {
      this.play();
    });
  };

  chooseOptionScissors = () => {
    // doar promite ca va schimba starea
    this.setState({ userChoice: "scissors" }, () => {
      this.play();
    });
  };

  render() {
    const activeElement = {
      backgroundColor: "yellow"
    };

    return (
      <div className="App">
        <h1>Rock Paper Scissors</h1>
        <h2>Choose a option</h2>
        <img
          onClick={this.chooseOptionRock}
          src={rockImg}
          alt="rock"
          style={this.state.userChoice === "rock" ? activeElement : null}
        ></img>
        <img
          onClick={this.chooseOptionPaper}
          src={paperImg}
          alt="paper"
          style={this.state.userChoice === "paper" ? activeElement : null}
        ></img>
        <img
          onClick={this.chooseOptionScissors}
          src={scissorsImg}
          alt="scissors"
          style={this.state.userChoice === "scissors" ? activeElement : null}
        ></img>
        <h1>PC: {this.state.computerChoice}</h1>
        <h1>PC winn!</h1>
      </div>
    );
  }
}

// conditie ? v1 : v2;

// https://github.com/bondastefana/SIIT_Bonda_Stefana/blob/master/week5_Rock_Paper_Scissors_Game_JS/app.js
