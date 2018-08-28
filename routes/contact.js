const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const nodemailer = require('nodemailer');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.post('/', upload.array(), (req, res) => {
  let html;
  const formType = req.body.formSelected;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    port: 25,
    auth: {
      user: '13lackcloudtest@gmail.com',
      pass: `${process.env.REACT_APP_PWSF_CONTACT_EMAIL_PASSWORD}`
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  if (formType === 'General') {
    html = `
      <p><b>Name:</b></p>
      <p>${req.body.name}</p>
      <p><b>Email:</b></p>
      <p>${req.body.email}</p>
      <p><b>Message</b></p>
      <p>${req.body.message}</p>
    `
  } else if (formType === 'Private Events') {
    html = `
      <p><b>Event Type:</b></p>
      <p>${req.body.eventType}</p>
      <p><b>Attendance:</b></p>
      <p>${req.body.attendance}</p>
      <p><b>Beverages:</b></p>
      <p>${req.body.beverages}</p>
      <p><b>Food:</b></p>
      <p>${req.body.food}</p>
      <p><b>Audio Visual:</b></p>
      <p>${req.body.audioVisual}</p>
      <p><b>Decorations:</b></p>
      <p>${req.body.decorations}</p>
    `
  } else if (formType === 'Booking') {
    html = `
      <p><b>Date:</b></p>
      <p>${req.body.date}</p>
      <p><b>Type:</b></p>
      <p>${req.body.type}</p>
      <p><b>Acts:</b></p>
      <p>${req.body.acts}</p>
      <p><b>Previous Shows:</b></p>
      <p>${req.body.previousShows}</p>
    `
  } else if (formType === 'Roll Up Gallery') {
    html = `
      <p><b>${req.body.message}</b></p>
    `
  } else if (formType === 'Lost and Found') {
    html = `
      <p><b>Date Lost:</b></p>
      <p>${req.body.dateLost}</p>
      <p><b>Ticket Number:</b></p>
      <p>${req.body.ticketNumber}</p>
      <p><b>Description:</b></p>
      <p>${req.body.description}</p>
      <p><b>Contact Info:</b></p>
      <p>${req.body.contactInfo}</p>
    `
  }

  const mailerOptions = {
    from: '13lackcloudtest@gmail.com',
    to: 'jonathan.crawford55@gmail.com',
    subject: `new ${formType} form submission`,
    html: html
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

module.exports = router;
