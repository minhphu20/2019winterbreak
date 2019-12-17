// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// A chat server: This server receives TCP connection, and will write 
// data to all other sockets connected to it!

// How does blocking work here??

var net = require('net');
net.createServer(processTCPConnection).listen(4000); // Create a server and bind it to port 4000, listen to incoming traffic to this port
// Call function processTCPConnection for each connection

var clients = []; // List of connected clients
function processTCPConnection(socket) {
    clients.push(socket); // Add this client to our connected list
    socket.on('data', function (data) {
        broadcast("> " + data, socket); // Send received data to all
    });

    socket.on('end', function() {
        clients.splice(clients.indexOf(socket), 1); // Remove socket
    });
}

// Send messages to all clients
function broadcast(message, sender) {
    clients.forEach(function (client) {
        if (client === sender) return;
        client.write(message);
    });
}

// That is all of the chat server implementation.

// We can also have a simple file server.

// How about a real simple file server?

net.createServer(function (socket) {
    socket.on('data', function (filename) {
        fs.readFile(filename.toString(), function(error, fileData) {
            if (!error) {
                socket.write(fileData);
            } else {
                socket.write(error.message);
            }
            socket.end();
        });
    });
}).listen(4000);

// This server listens on port 4000, if there is a TCP connection on some socket,
// when it receives some data it will attempt to read the file and then write it back
// to the socket (write error if it fails to open the file), and then close the closes
// socket.

// What happen if you want to read a lot of files?

// callback is a way to ensure that certain code doesn't execute until another code
// has finished execution

// call back is something that is executed after the code is done executing

//https://www.twilio.com/blog/react-app-with-node-js-server-proxy

// now we will learn to make a react app using some server proxy

//Create React App + Express Server



// First use npm init react-app MyNewApp to create a new react app
// Then test using npm start (now you only have the front end, not the server)
// Next we will add a server, there are a few dependencies that will be helpful:
// - nodemon: for automatically restarting the server
// - node-env-run: for loading environment variable in a config file in development
// - npm-run-all: for running multiple npm scripts at the same time
// - express-pino-logger and pino-colada: for better server logging


/**
 * a file called .env store our environment variables
 * will be useful for including credentials like API keys
 * 
 * and you will add a folder called server, and then add the server code into
 * a file called index.js
 * 
 * then you can add the command to run in your package.
 * 
 * and then you can link the two using proxy in your server and 
 * a run script dev that run both the front end and the server
 * 
 * so this is most likely how this was set up with react + express
 *  
 *  now we just need to learn how to put the database into this
 * 
 */



