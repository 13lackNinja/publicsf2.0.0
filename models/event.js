const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
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

exports.Event = Event;
