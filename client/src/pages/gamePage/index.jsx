import React, { useState } from "react";
import axios from "axios";
import { Board } from "./components/Board";
import { Scoreboard } from "./components/Scoreboard";
import { PlayAgainButton } from "./components/PlayAgainButton";
import { StopButton } from "./components/StopButton";

function GamePage() {
  const winningMoves = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6],
  ];

  const [playerOneName, setPlayerOneName] = useState("");
  const [playerTwoName, setPlayerTwoName] = useState("");
  // setting an array for the 'X' and 'O' values
  const [board, setBoard] = useState(Array(9).fill(null));
  // setting the 'X' value - to be updated later for 'O'
  const [xPlaying, setXPlaying] = useState(true);
  // keeping track of the scores
  const [scores, setScores] = useState({ xScore: 0, oScore: 0, draw: 0 });
  // restarting the game (board)
  const [playAgain, setPlayAgain] = useState(false);
  // rounds played
  const [roundsPlayed, setRoundsPlayed] = useState(1);

  // player names
  const handlePlayerOneChange = (event) => {
    setPlayerOneName(event.target.value);
  };
  const handlePlayerTwoChange = (event) => {
    setPlayerTwoName(event.target.value);
  };

  const handleBoxClick = (boxIndex) => {
    // If the round has ended, do nothing
    if (board[boxIndex] === null && playAgain) {
      return;
    }

    const updatedBoard = board.map((value, index) => {
      if (index === boxIndex) {
        return xPlaying ? "X" : "O";
      } else {
        return value;
      }
    });

    // put a value into a box [array]
    setBoard(updatedBoard);

    // apply points to the winner! or if none, then a draw
    const winner = checkWinner(updatedBoard);
    if (winner) {
      if (winner === "X") {
        let { xScore } = scores;
        xScore += 1;
        setScores({ ...scores, xScore });
      } else {
        let { oScore } = scores;
        oScore += 1;
        setScores({ ...scores, oScore });
      }
    }
    if (winner === "draw") {
      let { draw } = scores;
      draw += 1;
      setScores({ ...scores, draw });
    }

    // change values - from 'X' to 'O'
    setXPlaying(!xPlaying);
  };

  const checkWinner = (board) => {
    for (let i = 0; i < winningMoves.length; i++) {
      const [x, y, z] = winningMoves[i];

      // check for the winner
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setPlayAgain(true);
        return board[x];
      }

      // check for a draw
      if (board.every((value) => value !== null)) {
        setPlayAgain(true);
        return "draw";
      }
    }
  };

  const newRound = () => {
    setPlayAgain(false);
    setRoundsPlayed(roundsPlayed + 1);
    setBoard(Array(9).fill(null));
  };

  const handleGameSubmit = async (event) => {
    const { xScore, oScore, draw } = scores;
    event.preventDefault();
    // Save the game data to the server
    try {
      await axios.post("http://localhost:3003/newGame/gameData", {
        board: board,
        roundsPlayed: roundsPlayed,
        playerOne: playerOneName,
        playerOneWins: xScore,
        playerTwo: playerTwoName,
        playerTwoWins: oScore,
        draws: draw,
        // add date | time started
        // add time | time ended
      });

      setPlayAgain(false);
      setBoard(Array(9).fill(null));
    } catch (error) {
      console.error("Error saving game data:", error);
    }
  };

  return (
    <div className="gamePage">
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

        <Scoreboard
          scores={scores}
          xPlaying={xPlaying}
          playAgain={playAgain}
        ></Scoreboard>
        <Board board={board} onClick={handleBoxClick}></Board>

        <StopButton></StopButton>
        <PlayAgainButton newRound={newRound}></PlayAgainButton>
      </form>
    </div>
  );
}

export default GamePage;
