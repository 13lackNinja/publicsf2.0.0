
// Modules

const express = require('express');
const app = express();
const publicsf = require('publicsf');

// Middlewear

app.use('/publicsf', publicsf);

// Port

app.listen(8090);
