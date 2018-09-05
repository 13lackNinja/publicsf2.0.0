
const express = require('express');
const path = require('path');
const app = express();

const staffRouter = require('./routes/staff');
const contactRouter = require('./routes/contact');

app.use('/staff', staffRouter);
app.post('/staff', staffRouter);
app.use('/api/contact', contactRouter);


app.use(express.static(path.join(__dirname, 'build')));

app.get(/^\/(?!api).*$/, (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(8090);
