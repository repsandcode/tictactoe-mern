import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./components/StopButton.css";
// import { PlayAgainButton } from "./components/PlayAgainButton";
// import { StopButton } from "./components/StopButton";

import axios from "axios";

const Form = ({ scores, roundsPlayed }) => {
  const navigate = useNavigate();

  const { xScore, oScore, draw } = scores;
  const [playerOneName, setPlayerOneName] = useState("");
  const [playerTwoName, setPlayerTwoName] = useState("");

  // player names
  const handlePlayerOneChange = (event) => {
    setPlayerOneName(event.target.value);
  };
  const handlePlayerTwoChange = (event) => {
    setPlayerTwoName(event.target.value);
  };

  const handleGameSubmit = async (event) => {
    // console.log(scores);

    event.preventDefault();
    // Save the game data to the server
    try {
      const gameData = {
        roundsPlayed: roundsPlayed,
        playerOne: playerOneName,
        playerOneWins: xScore,
        playerTwo: playerTwoName,
        playerTwoWins: oScore,
        draws: draw,
      };

      await axios.post("http://localhost:3003/newGame/gameData", gameData);

      // setPlayAgain(false);
      // setBoard(Array(9).fill(null));
      navigate("/");
    } catch (error) {
      console.error("Error saving game data:", error);
    }
  };

  return (
    <form onSubmit={handleGameSubmit}>
      <div>
        <label>Player 1 (X):</label>
        <input
          type="text"
          name="playerOneName"
          value={playerOneName}
          onChange={handlePlayerOneChange}
        />
      </div>
      <div>
        <label>Player 2 (O):</label>
        <input
          type="text"
          name="playerTwoName"
          value={playerTwoName}
          onChange={handlePlayerTwoChange}
        />
      </div>
      {/* <Link to={"/"}> */}
      <button className="stop-button" type="submit">
        Stop
      </button>
      ;{/* </Link> */}
    </form>
  );
};

export default Form;
