import express from 'express';
import '../misc/db.js';
import checkSession from '../middlewares/checkSession.js';
import Chat from '../models/Chat.js';

const router = express.Router();

router.get('/messages', checkSession, async (req, res) => {
  const { id } = req.session.user;
  // console.log('req.session.user;!!!!!!!!!!', id);
  let chat = await Chat.findOne({ userId: id });
  if (!chat) {
    chat = await Chat.create({ userId: id });
  }
  // console.log('chat.messages!!!!!!!!!!', chat.messages);
  res.json(chat.messages);
});

router.put('/message', checkSession, async (req, res) => {
  const { id } = req.session.user;
  const chat = await Chat.findOne({ userId: id });
  chat.messages.push(req.body.send);
  chat.save();
  res.end();
});

router.get('/admin', async (req, res) => {
  const chats = await Chat.find();
  res.json(chats);
});

export default router;
