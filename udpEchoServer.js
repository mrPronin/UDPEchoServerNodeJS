const PORT = 41234;
// const HOST = '127.0.0.1';
const HOST = 'localhost';

const dgram = require('dgram');
const server = dgram.createSocket('udp4');

server.on('error', (err) => {
  console.log(`server error:\n${err.stack}`);
  server.close();
});

server.on('message', (msg, rinfo) => {
  console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
  //sending msg
  server.send(msg, rinfo.port,'localhost',function(error){
    if(error){
      client.close();
    // }else{
    //   console.log('Data sent !!!');
    }

  });
});

server.on('listening', () => {
  var address = server.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

server.bind(PORT, HOST);
