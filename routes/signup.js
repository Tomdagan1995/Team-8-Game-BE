const express = require("express");
const { v4: uuidv4 } = require("uuid");
const router = express.Router();
const { checkEmail, supabase } = require("../db_models");
const bcrypt = require("bcrypt");

router.post("/", checkEmail, async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(`${req.body.password}`, salt);
  const user = { ...req.body, password: hashedPassword, id: uuidv4() };
  supabase
    .from("users")
    .insert(user)
    .then((result) => {
      console.log("this is result", result);
    });
  res.send({ userId: user.id });
});

module.exports = router;
