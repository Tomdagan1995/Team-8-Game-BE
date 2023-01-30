const express = require('express');
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log('Server is running on port 3000');
});