import React from "react";

const GameHistory = ({ games }) => {
  return (
    <div>
      <h2>Game History</h2>
      <ul>
        {games.map((game, index) => (
          <li key={index}>
            <strong>Game {index + 1} scores</strong>
            <ul>
              <li>{game.roundsPlayed} rounds played</li>
              <li>
                {game.playerOne} (X): {game.playerOneWins}
                {game.playerOneWins === 0 ? "win" : "wins"}
              </li>
              <li>
                {game.playerTwo} (O): {game.playerTwoWins}
                {game.playerTwoWins === 0 ? "win" : "wins"}
              </li>
              <li>Draws: {game.draws}</li>
              <li>Date started: {game.dateStarted}</li>
              <li>Date ended: {game.dateEnded}</li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameHistory;
