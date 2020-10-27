import express from 'express';
import bcrypt from 'bcrypt';
import nodemailer from 'nodemailer';
import User from '../models/User.js';
import '../misc/db.js';
import '../misc/env.js';
import logger from '../misc/logger.js';

const router = express.Router();

router.put('/logup', async (req, res) => {
  const {
    name, email, password,
  } = req.body;
  try {
    const userFinded = await User.findOne({ email });
    if (!userFinded) {
      const hashedPassword = await bcrypt.hash(password, Number(process.env.SALT_ROUNDS));
      const user = new User({
        userName: name,
        email,
        password: hashedPassword,
      });
      await user.save();
      req.session.user = {
        userName: user.userName,
        id: user._id,
        email,
        admin: user.admin,
      };
      const transporter = nodemailer.createTransport({
        host: 'smtp.yandex.ru',
        port: 465,
        secure: true,
        auth: {
          user: 'vasin.ogorod@yandex.ru',
          pass: process.env.EMAIL_PASSWORD,
        },
      });
      const mailOptions = {
        from: 'vasin.ogorod@yandex.ru',
        to: email,
        subject: 'Vasin ogorod!',
        text: `Поздравляем, Вы успешно зарегистрировались на нашем сайте!
        Данное письмо не требует ответа.`,
      };
      transporter.sendMail(mailOptions);
      return res.end();
    }
    return res.status(401).json({ message: 'пользователь с таким email уже существует' });
  } catch (err) {
    logger.error(err);
    return res.json({ message: 'Ошибка регистации пользователя' });
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
          admin: user.admin,
        };
        return res.end();
      }
      return res.status(401).json({ message: 'Неправильно введен пароль' });
    }
    return res.status(401).json({ message: 'Пользователя с таким именем не существует' });
  } catch (err) {
    logger.error(err);
    return res.status(401).json(err);
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
