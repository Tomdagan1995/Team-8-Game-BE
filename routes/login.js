const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();
const { checkPassword,authenticator } = require("../db_models");
require("dotenv").config();



router.post("/", checkPassword,authenticator, async (req, res) => {
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



module.exports = router;
