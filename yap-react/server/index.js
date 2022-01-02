const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get('/app/v1/user', (_req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
        name: 'Anonymous',
        balance: 1000,
        language: 'en',
      }));
  });

app.get('/app/v1/version', (_req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
        value: '1.0.0',
        major: 1,
        minor: 0,
        patch: 0,
      }));
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);