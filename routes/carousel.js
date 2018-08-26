const express = require('express');
const path = require('path');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');

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


router.get('/images/:index', (req, res) => {
  const options = {
    root: path.join(__dirname, '/../uploads')
  }
  const i = req.params.index;
  res.sendFile(`carousel_image${i}.jpg`, options);
});

router.post('/upload', uploadImages, (req, res) => {
  res.end();
});


module.exports = router;
