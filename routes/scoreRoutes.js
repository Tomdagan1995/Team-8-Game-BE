const express = require("express");
require("../index");
const ScoresController = require("../controllers/ScoresController");
const router = express.Router();

router.post("/", ScoresController.AddScore);

module.exports = router;
