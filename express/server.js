'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');

const router = express.Router();
router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Welcome to the Bean API!</h1><h3>To access the API data, make a GET request to <span style="color: papayawhip;">/api</span></h3>');
  res.end();
});

router.get('/api', (req, res) => {
  res.json({
    message: "Hello from the BeanAPI",
    data: {}
  })
});



app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

module.exports = app;
module.exports.handler = serverless(app);
