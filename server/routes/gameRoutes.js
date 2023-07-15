const express = require('express')
const router = express.Router();
const gameController = require('../controllers/gameController');

/* READ */
router.get("/", gameController.getIndex);
router.get("/:id", gameController.getGameData);
router.get("/newGame", gameController.getNewGame);
