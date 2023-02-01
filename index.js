const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: `.env` });
const PORT = process.env.PORT || 3000;
const signup = require("./routes/signup");
const scoreRoutes = require("./routes/scoreRoutes");
const login = require("./routes/login");
const cors = require("cors");
const app = express();



app.use(cors());
app.use(express.json());
app.use("/signup", signup);
app.use("/login", login);
app.use("/scores", scoreRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

});
