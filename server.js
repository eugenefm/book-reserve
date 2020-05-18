const express = require('express');
const path = require('path');
require('./config/db/mongoose');

const port = process.env.PORT;

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.use(express.json({ extended: false }));

app.use('/api/', require('./routes/api'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + './client/build/index.html'));
});

app.listen(port, () => {
  console.log('Sever is up on port: ' + port);
});
