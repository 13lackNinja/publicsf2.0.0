
// Modules

const express = require('express');
const path = require('path');
const app = express();

// Middlewear

app.use(express.static(path.join(__dirname, 'build')));

// Routes

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Port

app.listen(8090);
