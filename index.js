const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.get('/', (req, res) => {
  res
    .status(200)
    .json({"email": "dukdik_2003@hotmail.com", "password": "123456789er"})
    .end();
});
 
// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});