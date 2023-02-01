const express = require("express");
require("../index");
const ScoresController = require("../controllers/ScoresController");
const router = express.Router();

router.post("/Light", ScoresController.AddScore);
router.post("/Main", ScoresController.AddScoreMain);
// Get All Users Score History API
// Route: ‘/scores [GET] (Protected to user only)
// Responsible for getting all the users scores
router.get("/Light", ScoresController.getAllScores);
router.get("/Main", ScoresController.getAllScoresMain);
// Get Logged In User’s Score history API
// Route: ‘/scores/:id [GET]

// ****** (Protected to user only) *********************** Add auth from iliya after push pull

// Responsible for getting the logged in user's score
router.get("/:id", ScoresController.getUserScores);
// Route: ‘/scores/last/:id [GET] (Protected to user only)
// Responsible for getting the user’s last score
// Display the users last score in the home or game page
router.get("/last/:id", ScoresController.getLastScore);
// Route: ‘/scores/high/:id [GET]

//********** */ (Protected to user only) ****************** Add auth from iliya after push pull

// Responsible for getting highest score of a user
// Display the user’s highest score in the home or game page
router.get("/high/:id", ScoresController.getHighScore);
module.exports = router;
