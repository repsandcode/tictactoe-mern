const Game = require("../models/Game");

module.exports = {
  saveGame: async (req, res) => {
    /*===== get All game data =====*/
    // const {} = req.body;
    try {
      const gameData = await Game.create({
        // game data from the form
      });

      res.json({ message: "Game Saved!", gameData });
    } catch (err) {
      console.error(err);
    }
  },
};
