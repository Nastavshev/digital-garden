import ws from 'ws';
import './misc/db.js';
import User from './models/User.js';

const wsServer = new ws.Server({
  port: 3333,
});

// const clients = {};
// let currentChat = '';
const adminPromis = User.findOne({ admin: true });
wsServer.on('connection', (client) => {
  client.on('message', async (message) => {
    try {
      const admin = await adminPromis;
      const sentMessage = JSON.parse(message);
      wsServer.clients.forEach((client) => {
        client.send(message);
      })
    } catch (err) {
      console.log(err);
    }
  });
  // console.log('clients >>>>>>>>>>', clients);
});


// if (sentMessage.userId == admin.id) {
//   clients[admin.id] = client;
//   currentChat = sentMessage.id;
// } else {
//   clients[sentMessage.id] = client;
// }
// if (sentMessage.id == currentChat) {
//   clients[admin.id]?.send({
//     id: sentMessage.userId,
//     message: sentMessage.message,
//   });
// }
// clients[sentMessage.id]?.send({
//   id: sentMessage.id,
//   message: sentMessage.message,
// });
