const Game = require("../models/Game");

module.exports = {
  saveGame: async (req, res) => {
    /*===== get All game data =====*/
    const {
      board,
      roundsPlayed,
      playerOne,
      playerOneWins,
      playerTwo,
      playerTwoWins,
      draws,
    } = req.body;

    try {
      const gameData = await Game.create({
        // game data from the form
        board: board,
        roundsPlayed: roundsPlayed,
        playerOne: playerOne,
        playerOneWins: playerOneWins,
        playerTwo: playerTwo,
        playerTwoWins: playerTwoWins,
        draws: draws,
      });

      res.json({ message: "Game Saved!", gameData });
    } catch (err) {
      console.error(err);
    }
  },
};
