'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');


const router = express.Router();
router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`<html>
  <head>
    <style>
      * {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 300;;
      }
      .container {
        padding: 40px;
      }
      h1 {
        margin-bottom: 10px;;
      }

      body 
    </style>
  </head>
  <body>
    <div class='container'>
      <h1>Welcome to the Bean API!</h1>
      <h3>To access the API data, make a GET request to <a style="color: crimson;" href="https://fervent-mirzakhani-1e6826.netlify.app/api">/api</a></h3>
    </div>
  </body>
</html>`);
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
//app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

module.exports = app;
module.exports.handler = serverless(app);
