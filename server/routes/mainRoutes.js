const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");

// show home page
router.get("/", homeController.getHome);

module.exports = router;
