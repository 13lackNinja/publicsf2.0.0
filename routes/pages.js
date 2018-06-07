// PUBLICSF

// Modules
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

// Middlewear
router.use(express.static('public'));

// Routes
router.get('/', (req, res) => {
    res.sendFile('/markup/index.html', {root: './public'});
});

router.get('/events', (req, res) => {
  res.sendFile('/markup/events.html', {root: './public'});
});

router.get('/local161', (req, res) => {
  res.sendFile('/markup/local161.html', {root: './public'});
});

router.get('/connect', (req, res) => {
  res.sendFile('/markup/connect.html', {root: './public'});
});

router.get('/rentals', (req, res) => {
  res.sendFile('/markup/rentals.html', {root: './public'});
});

// Exports
module.exports = router;
