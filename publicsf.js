
// Modules

const express = require('express');
const app = express();
const pages = require('./routes/pages');
const bs = require('browser-sync').create();

// Middlewear

app.use('/publicsf', pages);

// Port

app.listen(8090);

// Browser sync

const bsOptions = {
  proxy: 'localhost:8090/publicsf',
  files: [
    './public/markup/*.html',
    './public/styles/*.css',
    './public/scrips/*.js',
    '.public/images/*.jpg'
  ]
};

bs.init(bsOptions);

bs.reload('*.html', '*.css', '*.js');
