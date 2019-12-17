// These packages are needed to do different things
const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

// Our application will use the packages we imported above
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

// When the application points us to this link
// we will have the req as well as we will send the res via res
app.get('/api/greeting', (req, res) => {
    // get the request
    const name = req.query.name || 'World';
    // set the header
    res.setHeader('Content-Type', 'application/json');
    // send as a json string back to the web browser
    res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
  });

// we will bind our server to some port and it will start listening to that port
// QUESTION: what kind of port is being used if we have the server hosted on the cloud?
app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);

