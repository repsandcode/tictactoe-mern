const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");
const gameController = require("../controllers/gameController");

// show home page
router.get("/", homeController.getIndex);

// get new game page
router.get("/newGame", gameController.getNewGame);

module.exports = router;
