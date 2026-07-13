const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('My Express App is running! This is my second time deploying to Render. I have made some changes to the code and redeployed it.');
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});