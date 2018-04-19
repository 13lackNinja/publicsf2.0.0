// Modules

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fs = require('fs');
const router = express.Router();


// Middlewear

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));


// Connect to database

mongoose.connect('mongodb://localhost/publicsf')
  .then(() => console.log('Connected to publicsf database'))
  .catch(err => console.log(err));


// Define mongoose schema

const eventSchema = mongoose.Schema({
  eventbriteID: Number,
  title: String,
  start: Date,
  end: Date,
  promoter: String,
  artists: String,
  room: String,
  price: String,
  image: String,
  description: String
});

const Event = mongoose.model('Event', eventSchema);


// Routing

app.get('/', (req, res) => {
    res.sendFile('/markup/index.html', {root: './public'});
});

app.get('/events', (req, res) => {
  res.sendFile('/markup/events.html', {root: './public'});
});

app.get('/about', (req, res) => {
  res.sendFile('/markup/about.html', {root: './public'});
});

app.get('/contact', (req, res) => {
  res.sendFile('/markup/contact.html', {root: './public'});
});

app.get('/staff', (req, res) => {
  res.sendFile('/markup/staff.html', {root: './public'});
});

app.get('/allevents', (req, res) => {
  async function getEvents() {
    const allEvents = await Event.find().select({ _id: 0 });
    res.json(allEvents);
  }
  getEvents();
});


// Form handling

app.post('/registration', (req, res) => {
  console.log(req.body);
  const event = new Event(req.body);
  event.save((err, event) => {
     if (err) return console.log(err);
     console.log('This event has been saved: ', event);
  });
  res.json(event);
});


// Module export

module.exports = router;
