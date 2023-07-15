const Game = require('../models/Game');

module.exports = {
  saveGame: async (req,res) => {
    try {
      await Game.create({
        
      })
    } catch(err) {
      console.log(err);
    }
  },
}