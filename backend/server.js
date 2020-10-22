import express from 'express';
import session from 'express-session';
import FileStoreGeneral from 'session-file-store';
import authRouter from './routes/auth.js';
import indexRouter from './routes/index.js';
import modalsRouter from './routes/modal.js';
import chatRouter from './routes/chat.js';
import './ws.js';
import gardenBedModel from './models/gardenBedModel.js';
import './misc/db.js';
import './misc/env.js';

const FileStore = FileStoreGeneral(session);

const app = express();

app.use(express.json());
app.use(express.static('public'));

app.use(session({
  store: new FileStore(),
  key: 'user_sid',
  secret: process.env.SESSION_KEY,
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 1000 * 60 * 60 * 24 * 365,
  },
}));

app.post('/modal', async (req, res) => {
  // console.log(req.body)
  // console.log(req.session.user)
  const {
    name, grade, comment, datePlant,
  } = req.body.input;
  let userId = req.session.user.id
  const newGardenBed = await gardenBedModel({
    name,
    grade,
    comment,
    datePlant,
    userId,
  });
  await newGardenBed.save();
  console.log(newGardenBed);
  res.end();
});

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/chat', chatRouter);
app.use('/modals', modalsRouter);

app.listen(process.env.PORT || 3001, () => {
  console.log('I am work 3001');
});
