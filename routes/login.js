const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const path = require('path');

const passport = require('passport');
const LocalStrategy = require('passport-local');


// Passport Configuration

passport.use(new LocalStrategy(
  function (username, password, done) {
    const usr = process.env.PWSF_LOGIN_USERNAME;
    const pwd = process.env.PWSF_LOGIN_PASSWORD;
    if (username != usr || password != pwd) {
      return done(null, false, { message: 'Incorrect username or password'});
    }
    return done(null, { username: username });
  }
));

passport.serializeUser((user, done) => {
  done(null, user.username)
});

passport.deserializeUser((username, done) => {
  done(null, username);
});


// Middlewear

router.use(bodyParser.urlencoded({ extended: false }));
router.use(cookieSession({
  name: 'session',
  keys: [process.env.PWSF_LOGIN_COOKIE_KEY],
  maxAge: 24 * 60 * 60 * 1000
}));
router.use(passport.initialize());
router.use(passport.session());


// Routes

router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

router.post('/login',
  passport.authenticate('local', { failureRedirect: '/login' }),
  (req, res) => {
    req.session.user = req.user;
    if (process.env.NODE_ENV === 'development') {
      res.redirect('http://localhost:3000/staff');
    } else {
      res.redirect('/staff');
    }
  });


module.exports = router;
