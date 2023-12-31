const express = require("express");
const router = express.Router();
const gameController = require("../controllers/gameController");

// post game data
router.post("/gameData", gameController.saveGame);

module.exports = router;
