const express = require('express');

const app = express();

const { PORT = 9999, APPID = 1111 } = process.env;

app.use('/admin', function (req, res) {
  res.end(`App admin with id: ${APPID}`);
});

app.use('/', function (req, res) {
  res.end(`App with id: ${APPID}`);
});

app.listen(PORT, function () {
  console.log('server listening on port', PORT);
});