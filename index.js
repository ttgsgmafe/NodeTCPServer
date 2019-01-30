const net = require('net');
const port = 9432;
const host = '127.0.0.1';

var server = net.createServer((socket) => {
    socket.on("error", (err) => {
        console.log("Caught flash policy server socket error: ")
        console.log(err.stack);
    });
    setInterval(() => {
        socket.write('Echo server\r\n');
    }, 2000);	
	socket.pipe(socket);
}).listen(port, host);


// const server = net.createServer();
// server.listen(port, host, () => {
//     console.log('TCP Server is running on port ' + port +'.');
// });

// let sockets = [];

// server.on('connection', function(sock) {
//     console.log('CONNECTED: ' + sock.remoteAddress + ':' + sock.remotePort);
//     sockets.push(sock);

//     sock.on('data', function(data) {
//         console.log('DATA ' + sock.remoteAddress + ': ' + data);
//         // Write the data back to all the connected, the client will receive it as data from the server
//         sockets.forEach(function(sock, index, array) {
//             sock.write(sock.remoteAddress + ':' + sock.remotePort + " said " + data + '\n');
//         });
//     });

//     server.on('close', function(data) {
//         let index = sockets.findIndex(function(o) {
//             return o.remoteAddress === sock.remoteAddress && o.remotePort === sock.remotePort;
//         })
//         if (index !== -1) sockets.splice(index, 1);
//         console.log('CLOSED: ' + sock.remoteAddress + ' ' + sock.remotePort);
//     });
// });