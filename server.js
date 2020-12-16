const net = require('net');

const port = 1337;
const host = '127.0.0.1';
const payloadArr = [
  'content/foo.txt',
  'content/bar.txt',
  'content/aardvark.txt',
  'content/bear.txt',
  'content/cat.txt',
  'content/dog.txt',
  'content/elephant.txt',
  'content/fox.txt',
  'content/gorilla.txt',
  'content/hippo.txt',
  'content/iguana.txt',
  'content/jaguar.txt',
  'content/koala.txt',
  'content/leopard.txt',
  'content/mongoose.txt',
  'content/narwhal.txt',
  'content/octopus.txt',
  'content/parrot.txt',
  'content/quokka.txt',
  'content/reindeer.txt',
  'content/snake.txt',
  'content/trex.txt',
  'content/urchin.txt',
  'content/velicopator.txt',
  'content/wolf.txt',
  'content/xenops.txt',
  'content/yak.text',
  'content/zebra.text',
];

const FILE = 'MESSAGE';

const payLoadStr = payloadArr.join(',');
const server = net.createServer();

// const server = net.createServer((socket) => {
//   socket.write(payLoadStr);
//   socket.pipe(socket);
// });

server.on('connection', (socket) => {
  console.log('Connected to server');
  console.log(`Buffer size: ${socket.bufferSize}`);

  socket.on('data', (data) => {
    console.log(`Data received is: ${data}`);
    // const bRead = socket.bytesRead();
    // const bWrite = socket.bytesWritten();

    // console.log(`Read ${bRead} bytes`);
    // console.log(`Write ${bWrite} bytes`);
    socket.write(payLoadStr);
    // socket.pipe(socket);
  });

  socket.on('error', (err) => {
    console.log(`Error: ${err}`);
  });

  socket.on('end', (data) => {
    console.log('Socket ended from the other end');
    console.log(`End Data : ${data}`);
  });
});

server.listen(port, host, () => {
  console.log(`Server started on ${host}:${port}`);
});

server.on('error', (err) => {
  console.log(`Server error: ${err}`);
});
