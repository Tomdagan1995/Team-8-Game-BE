const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);





async function checkEmail(req, res, next){
    const email = req.body.email
    const result = await supabase.from("users").select('*').eq("email", email)
    if (result) {
      next();
    } else {
      console.log(result);
      res.send("email already exists");
    }
  }
  
  module.exports = { checkEmail, supabase };