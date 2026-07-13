const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('My First automated deployment with GitHub Actions and Render!');
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});