const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();
const { checkPassword } = require("../db_models");
const jwt = require("jsonwebtoken");
require("dotenv").config();



router.post("/", checkPassword, async (req, res) => {
  const check = await bcrypt.compare(
    `${req.body.password}`,
    `${req.result.data[0].password}`
  );
  if (check) {
    res.send({ ...req.result.data[0], password: null });
  } else {
    res.status(400).send("Incorrect info");
  }
});

// jwt.sign( process.env.ACCESS_TOKEN_SECRET, (err, token) => {
//     res.json({ token });

module.exports = router;
