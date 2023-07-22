const Game = require("../models/Game");

module.exports = {
  getHome: async (req, res) => {
    try {
      const gameData = await Game.find().sort({ createdAt: "desc" }).lean();
      res.json(gameData);
    } catch (err) {
      console.error(err);
    }
  },
};
