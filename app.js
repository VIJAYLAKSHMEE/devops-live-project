const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('DevOps Live Project - Version 2 🚀');
});

app.listen(8080, () => {
  console.log('Server running on port 8080');
});

