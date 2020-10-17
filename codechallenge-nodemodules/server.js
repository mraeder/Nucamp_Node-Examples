// this is a fork from https://codesandbox.io/s/xvw8orl17q

const http = require('http');
const generate = require('./generate.js');  // Import the generate module into server.js (using CommonJS format, not ES6)

const locations = ['Bellingham', 'Marysville', 'Seattle', 'Tacoma', 'Spokane'];

const generateMessage = generate;  // assign it as the value for const generateMessage.

//create a server object:
http
  .createServer(function(req, res) {
    res.write(generateMessage(locations)); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
