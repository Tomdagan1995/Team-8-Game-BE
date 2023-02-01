const { supabase } = require("../db_models");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
    try {
      const { email, password, } = req.body;
  
      if (!email || !password) {
        return res
          .status(400)
          .json({ sucess: false, message: "Email and password required" });
      }
      const user = await supabase.from("users").select("*").eq("email", email);
      if (!user) {
        return res
          .status(400)
          .json({ sucess: false, message: "Invalid Credentials" });
      }
  
      generateToken(user, 200, res);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  };
  
  const generateToken = async (user, statusCode, res) => {
    const token = jwt.sign({ id: user.id }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "1h",
    });
    const options = {
      httpOnly: true,
    };
  console.log(user)
    res
      .status(statusCode)
      .json({
        sucess: true,
        token,
        user: user.data[0].username,
        email: user.data[0].email
      });
  };
  