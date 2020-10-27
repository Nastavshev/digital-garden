import express from 'express';
import '../misc/db.js';
import checkSession from '../middlewares/checkSession.js';
import Chat from '../models/Chat.js';
import User from '../models/User.js';
import logger from '../misc/logger.js';

const router = express.Router();

router.get('/messages', checkSession, async (req, res) => {
  const { id } = req.session.user;
  let chat = await Chat.findOne({ userId: id });
  if (!chat) {
    chat = await Chat.create({ userId: id });
  }
  res.json(chat.messages);
});

router.put('/message', checkSession, async (req, res) => {
  const { id } = req.session.user;
  const chat = await Chat.findOne({ userId: id });
  chat.messages.push(req.body);
  chat.save();
  res.end();
});

router.get('/admin', async (req, res) => {
  try {
    const chats = await Chat.find().lean();
    const user = await User.find();
    const chatsWithNames = [];
    chats.map((el) => {
      const currentUser = user.find((element) => element.id == el.userId);
      chatsWithNames.push({
        ...el,
        userName: currentUser.userName,
      });
    });
    res.json(chatsWithNames);
  } catch (err) {
    logger.error(err);
    res.status(401).json(err);
  }
});

export default router;
