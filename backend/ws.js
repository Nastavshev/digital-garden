import ws from 'ws';
import './misc/db.js';
import User from './models/User.js';

const wsServer = new ws.Server({
  port: 3333,
});

const clients = {};
let currentUser = '';
const adminPromis = User.findOne({ admin: true });
wsServer.on('connection', (client) => {
  client.on('message', async (message) => {
    try {
      const admin = await adminPromis;
      const sentMessage = JSON.parse(message);
      // console.log('sentMessage.id >>>>>>>>>', sentMessage.id);

      if (sentMessage.userId === admin.id) {
        clients[admin.id] = client;
        currentUser = sentMessage.id;
        clients[currentUser]?.send(JSON.stringify({
          id: admin.id, message: sentMessage.message,
        }));
        clients[admin.id]?.send(JSON.stringify({
          id: admin.id, message: sentMessage.message,
        }));
        // console.log('clients[admin.id] = client;');
      } else {
        clients[sentMessage.id] = client;
        clients[admin.id]?.send(JSON.stringify({
          id: sentMessage.id, message: sentMessage.message,
        }));
        clients[currentUser]?.send(JSON.stringify({
          id: sentMessage.id, message: sentMessage.message,
        }));
      }
      // console.log('clients >>>>>>>>>>>>', clients);
      // console.log('admin.id >>>>>>>', admin.id);
    } catch (err) {
      console.log(err);
    }
  });
});


// const clients = {};
// const adminPromis = User.findOne({ admin: true });
// wsServer.on('connection', (client) => {
//   client.on('message', async (message) => {
//     console.log('message >>>>>>>>>', message);
//     try {
//       const admin = await adminPromis;
//       const sentMessage = JSON.parse(message);
//       // console.log('sentMessage.id >>>>>>>>>', sentMessage.id);

//       if (sentMessage.userId == admin.id) {
//         clients[admin.id] = client;
//         // console.log('clients[admin.id] = client;');
//       } else {
//         clients[sentMessage.id] = client;
//       }

//       // console.log('clients >>>>>>>>>>>>', clients);
//       // console.log('admin.id >>>>>>>', admin.id);

//       clients[sentMessage.id]?.send(JSON.stringify({
//         id: sentMessage.id, message: sentMessage.message,
//       }));

//       clients[admin.id]?.send(JSON.stringify({
//         id: admin.id, message: sentMessage.message,
//       }));
//     } catch (err) {
//       console.log(err);
//     }
//   });
// });
