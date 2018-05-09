
// Modules

const express = require('express');
const app = express();
const pages = require('./routes/pages');
const mongoose = require('mongoose');

// Connect to database

mongoose.connect('mongodb://localhost/publicsf')
  .then(() => console.log('Connected to publicsf database'))
  .catch(err => console.log(err));

// Middlewear

app.use('/publicsf', pages);

// Port

app.listen(8090);
