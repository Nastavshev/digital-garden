import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/User.js';
import '../misc/db.js';
// import '../misc/env';

const router = express.Router();

router.put('/logup', async (req, res) => {
  const {
    name, email, password,
  } = req.body;
  try {
    const userFinded = await User.findOne({ email });
    if (!userFinded) {
      console.log('flag !!!!!!!!!!!!!!!!!!');
      // process.env.SALT_ROUNDS
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({
        userName: name,
        email,
        password: hashedPassword,
      });
      await user.save();
      req.session.user = {
        id: user._id,
        email,
      };
      return res.end();
    }
    return res.status(401);
  } catch (err) {
    console.log(err);
    return res.json({ message: 'ошибка регистации пользователя' });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (isValidPassword) {
        req.session.user = {
          id: user._id,
          userName: user.userName,
          email,
        };
        return res.end();
      }
      return res.status(401);
    }
    return res.status(401);
  } catch (err) {
    console.error(err);
    return res.json(err);
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('connect.sid');
    res.end();
  });
});

router.get('/isSession', (req, res) => {
  res.json(req.session.user);
});

export default router;
