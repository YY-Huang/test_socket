const net = require('net');

const client = new net.Socket();
const port = 1337;
const host = '127.0.0.1';

const messageFormats = {
  0: {
    name: 'LIST_DIRECTORY',
    message: 'MESSAGE',
  },
  1: {
    name: 'FILE_LIST',
    message: 'MESSAGE',
  },
  2: {
    name: 'GET_FILE',
    message: 'MESSAGE',
  },
  3: {
    name: 'GET_FILE',
    message: 'MESSAGE',
  },
  4: {
    name: 'ERROR',
    message: 'MESSAGE',
  },
};

const parseData = async function (rawBuffer) {
  let data = '';
  for await (const info of rawBuffer) {
    data += JSON.parse(info);
  }
  return data;
};

client.connect(port, host, () => {
  // const LIST_DIRECTORY = 'MESSAGE';
  const FILE_LIST = 'MESSAGE';
  const ERROR = 'MESSAGE';
  console.log('Client connected');
  client.write(messageFormats['0'].message);
  // client.write("Hello from client" + client.address());
});

client.on('data', async (dataResults) => {
  // const GET_FILE = 'MESSAGE';
  // const dataIsParsed = await parseData(dataResults);
  // let data = '';

  // for await (const info of dataResults) {
  // data += JSON.parse(info);
  // }
  // const dataArr = JSON.parse(dataResults);
  // console.log(typeof (dataResults));
  console.log(`length is ${dataResults.length}`);

  console.log(`Data received:${dataResults}`);
  // console.log(`DataArr: ${dataArr}`);
  // client.destroy();
});

client.on('error', (err) => {
  console.log(`Client Error: ${err}`);
});

client.on('close', () => {
  console.log('Client connection closed');
});
