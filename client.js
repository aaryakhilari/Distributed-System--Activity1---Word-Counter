const net = require('net');

const HOST = '127.0.0.1';
const PORT = 5000;

const client = new net.Socket();

client.connect(PORT, HOST, () => {

    console.log("Connected to Server");

    client.write("I am learning Distributed Systems");
});

client.on('data', (data) => {

    const message = data.toString();

    console.log("Message from Server:", message);

    client.end();
});

client.on('error', (err) => {
    console.log("Connection Error:", err.message);
});