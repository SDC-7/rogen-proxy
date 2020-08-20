const express = require('express');
const path = require('path');
const app = express();
const PORT = 3030;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use('/airbnb/', express.static(path.join(__dirname, '../public')));

app.listen(PORT, () => console.log('Proxy Server listening on port ', PORT));
