import ws from 'ws';
import './misc/db.js';
import User from './models/User.js';

const wsServer = new ws.Server({
  port: 3333,
});

const clients = {};
const adminPromis = User.findOne({ admin: true });
wsServer.on('connection', (client) => {
  client.on('message', async (message) => {
    const admin = await adminPromis;
    const sentMessage = JSON.parse(message);
    // console.log('sentMessage.id >>>>>>>>>', sentMessage.id);
    // console.log('message >>>>>>>>>', message);

    if (sentMessage.adminId == admin.id) {
      clients[admin.id] = client;
      // console.log('clients[admin.id] = client;');
    } else {
      clients[sentMessage.id] = client;
    }

    // console.log('clients >>>>>>>>>>>>', clients);
    // console.log('admin.id >>>>>>>', admin.id);
    clients[sentMessage.id]?.send(sentMessage.message);
    clients[admin.id]?.send(sentMessage.message);
  });
});
