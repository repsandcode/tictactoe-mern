import React, { useState } from "react";
// import axios from "axios";
import { Board } from "./components/Board";
import { Scoreboard } from "./components/Scoreboard";
import { PlayAgainButton } from "./components/PlayAgainButton";
// import { StopButton } from "./components/StopButton";
import Form from "./Form";

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

    // check if there's a winner
    const winner = checkWinner(updatedBoard);
    addScore(winner);

    console.log(scores);
    // change values - from 'X' to 'O'
    setXPlaying(!xPlaying);
  };

  const newRound = () => {
    setPlayAgain(false);
    setRoundsPlayed(roundsPlayed + 1);
    setBoard(Array(9).fill(null));
  };

  const addScore = (winner) => {
    // apply points to the winner! or if none, then a draw
    if (winner) {
      if (winner === "X") {
        let { xScore } = scores;
        xScore += 1;
        setScores({ ...scores, xScore });
      } else if (winner === "O") {
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

  return (
    <div className="gamePage">
      <Form
        scores={scores}
        board={board}
        playAgain={playAgain}
        roundsPlayed={roundsPlayed}
      ></Form>
      <PlayAgainButton newRound={newRound}></PlayAgainButton>
      <Scoreboard
        scores={scores}
        xPlaying={xPlaying}
        playAgain={playAgain}
      ></Scoreboard>
      <Board board={board} onClick={handleBoxClick}></Board>
    </div>
  );
}

export default GamePage;
