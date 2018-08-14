
// Modules

const express = require('express');
const path = require('path');
const app = express();
const https = require('https');

// Middlewear

app.use(express.static(path.join(__dirname, 'build')));

// Routes

app.get(/^\/(?!api).*$/, (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/api/events', (req, res) => {
  https.get(`https://www.eventbriteapi.com/v3/organizers/8182660460/events/?token=${process.env.REACT_APP_EVENTBRITE_API_KEY}`,
    (response) => {
      let data = '';

      response.on('data', (chunk) => {
        data += chunk;
    });
    response.on('end', () => {
      res.json(JSON.parse(data));
    })
  }).on('error', (err) => console.log(err.message));
});

// Port

app.listen(8090);
