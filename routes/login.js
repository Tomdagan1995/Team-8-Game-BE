const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();
const { checkPassword} = require("../db_models");
require("dotenv").config();
const  {login} = require('../controllers/users.controllers.js')



router.post('/', login)



module.exports = router;
