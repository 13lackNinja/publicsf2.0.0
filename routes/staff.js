const express = require('express');
const path = require('path');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const cookieSession = require('cookie-session');

//Passport Configuration

const passport = require('passport');
const LocalStrategy = require('passport-local');

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

// Multer Configuration

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    const name = `carousel_${file.fieldname}.jpg`;
    const url = path.join(__dirname, '/../uploads/', name);

    if (fs.existsSync(url)) {
      fs.unlinkSync(url);
    }

    cb(null, name);
  }
});

const upload = multer({ storage: storage });

const uploadImages = upload.fields([
  { name: 'image1', maxCount: 1 },
  { name: 'image2', maxCount: 1 },
  { name: 'image3', maxCount: 1 }
]);

// Middlewear

router.use(cookieSession({
  name: 'session',
  keys: [process.env.PWSF_LOGIN_COOKIE_KEY],
  maxAge: 24 * 60 * 60 * 1000
}));


// Routes

router.get('/', (req, res) => {
  req.session.user = req.user;
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

router.post('/login',
  passport.authenticate('local', { failureRedirect: '/staff/login' }),
  (req, res) => {
    res.redirect('/staff');
  });

router.get('/carousel/images/:index', (req, res) => {
  const options = {
    root: path.join(__dirname, '/../uploads')
  }
  const i = req.params.index;
  res.sendFile(`carousel_image${i}.jpg`, options);
});

router.post('/carousel/upload', uploadImages, (req, res) => {
  res.end();
});

module.exports = router;
