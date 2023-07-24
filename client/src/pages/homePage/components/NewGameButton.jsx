import React from "react";
import { Link } from "react-router-dom";

export const NewGameButton = () => {
  return (
    <Link to="/newGame">
      <button>Start New Game</button>
    </Link>
  );
};
