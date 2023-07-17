import React, {useState} from 'react';

import './App.css';

import { Board } from './components/Board';
import { Scoreboard } from './components/Scoreboard';
import { PlayAgainButton } from './components/PlayAgainButton';


function App() {

  const winningMoves = [
    [0,1,2],
    [3,4,5],
    [6,7,8],

    [0,3,6],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [2,4,6],
  ]

  // setting an array for the 'X' and 'O' values
  const [board, setBoard] = useState(Array(9).fill(null));
  // setting the 'X' value - to be updated later for 'O'
  const [xPlaying, setXPlaying] = useState(true);
  // keeping track of the scores
  const [scores, setScores] = useState({ xScore: 0, oScore: 0, draw: 0});
  // restarting the game (board)
  const [playAgain, setPlayAgain] = useState(false);

  
  const handleBoxClick = (boxIndex) => {
    // If the round has ended, do nothing
    if (board[boxIndex]===null && playAgain) {
      return;
    }

    const updatedBoard = board.map((value, index) => {
      if(index === boxIndex) {
        return xPlaying? "X" : "O";
      } else {
        return value;
      }
    })

    // put a value into a box [array]
    setBoard(updatedBoard);


    // apply points to the winner! or if none, then a draw
    const winner = checkWinner(updatedBoard);
    if (winner) {
      if (winner === 'X') {
        let { xScore } = scores;
        xScore += 1;
        setScores({...scores, xScore});
      } else {
        let { oScore } = scores;
        oScore += 1;
        setScores({...scores, oScore});
      }
    }
    if (winner === 'draw') {
      let { draw } = scores;
      draw += 1;
      setScores({...scores, draw});
    }

    // change values - from 'X' to 'O'
    setXPlaying(!xPlaying);
  }

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
  }
 
  const newRound = () => {
    setPlayAgain(false);
    setBoard(Array(9).fill(null));
  }

  return (
    <div className="App">
      <Scoreboard scores={scores} xPlaying={xPlaying} playAgain={playAgain}></Scoreboard>
      <Board board={board} onClick={handleBoxClick}></Board>
      <PlayAgainButton newRound={newRound}></PlayAgainButton>
    </div>
  );
}

export default App;
