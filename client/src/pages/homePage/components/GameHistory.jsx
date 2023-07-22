import React from "react";
import React, { useState, useEffect } from "react";
import axios from "axios";

const GameHistory = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the server when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h2>Game History</h2>
      <ul>
        {data.map((game, index) => (
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
