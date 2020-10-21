import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/User.js';
import '../misc/db.js';
import mailer from '../nodemailer.js';
// import '../misc/env';

const router = express.Router();

router.put('/logup', async (req, res) => {
  const {
    name, email, password,
  } = req.body;
  try {
    const userFinded = await User.findOne({ email });
    if (!userFinded) {
      // console.log('flag !!!!!!!!!!!!!!!!!!');
      // process.env.SALT_ROUNDS
      const hashedPassword = await bcrypt.hash(password, 10);
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
      };
      // const message = {
      //   from: 'vasin.ogorod@yandex.ru',
      //   to: email,
      //   subject: 'Vasin ogorod!',
      //   // html: `<h1>privet</h1>`
      //   html:
      //   `<h2>Поздравляем, Вы успешно зарегистрировались на нашем сайте!</h2>
      //   <p>Данное письмо не требует ответа.<p>`,
      // };
      // mailer(message);
      return res.end();
    }
    return res.status(401).json({ message: 'пользователь с таким email уже существует' });
  } catch (err) {
    console.log(err);
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
        };
        return res.end();
      }
      return res.status(401).json({ message: 'Неправильно введен пароль' });
    }
    return res.status(401).json({ message: 'Пользователя с таким именем не существует' });
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


{ /* <i>данные вашей учетной записи:</i> */ }
// <ul>
//     <li>login: {{email}}</li>
//     <li>password: {{password}}</li>
// </ul>

