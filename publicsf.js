
// Modules

const express = require('express');
const app = express();
const pages = require('./routes/pages');

// Middlewear

app.use('/publicsf', pages);

// Port

app.listen(8090);
