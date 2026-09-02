const net = require('net');

const HOST = '127.0.0.1';
const PORT = 5000;

const server = net.createServer((socket) => {

    console.log("Client connected");

    socket.on('data', (data) => {

        const message = data.toString().trim();

        console.log("Message from Client:", message);

        // Count words
        const words = message.split(/\s+/);
        const wordCount = words.length;

        socket.write("Number of words: " + wordCount);
    });

    socket.on('end', () => {
        console.log("Client disconnected");
    });

    socket.on('error', (err) => {
        console.log("Socket Error:", err.message);
    });

});

server.listen(PORT, HOST, () => {
    console.log(`Server is running at ${HOST}:${PORT}`);
});