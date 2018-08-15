
// Modules

const express = require('express');
const path = require('path');
const app = express();
const https = require('https');
const nodemailer = require('nodemailer');


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

app.post('/api/contact', (req, res) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    port: 25,
    auth: {
      user: '13lackcloudtest@gmail.com',
      pass: 'arcisthefuture'
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  let mailerOptions = {
    from: '13lackcloudtest@gmail.com',
    to: 'jonathan.crawford55@gmail.com',
    subject: 'hello',
    text: 'hello'
  };

  transporter.sendMail(mailerOptions, (err, info) => {
    if(err) {
      console.log(err.message);
    } else {
      console.log(info);
    }
  });

  res.end();

});

// Port

app.listen(8090);
