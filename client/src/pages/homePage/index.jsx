import React from "react";

// import React, { useState } from "react";
import GameHistory from "./components/GameHistory";
import { NewGameButton } from "./components/NewGameButton";

const HomePage = () => {
  return (
    <div>
      <GameHistory />
      <NewGameButton />
    </div>
  );
};

export default HomePage;
