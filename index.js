const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 8080;
const signup = require('./routes/signup')
const login = require('./routes/login')
const cors = require('cors');
const app = express();



app.use(cors());
app.use(express.json());
app.use("/signup", signup);
app.use("/login", login);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

});