const mongoose = require("mongoose");
const { Schema } = mongoose;

const GameSchema = new Schema({
  board: {
    type: [[String]],
    required: true,
  },
  roundsPlayed: {
    type: Number,
    default: 1,
  },
  playerOne: {
    type: String,
    required: true,
  },
  playerOneWins: {
    type: Number,
    required: true,
    default: 0,
  },
  playerTwo: {
    type: String,
    required: true,
  },
  playerTwoWins: {
    type: Number,
    required: true,
    default: 0,
  },
  draws: {
    type: Number,
    default: 0,
  },
  dateStarted: {
    type: Date,
    required: true,
    default: Date.now,
  },
  dateEnded: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const GameModel = mongoose.model("Game", GameSchema);

module.exports = GameModel;
