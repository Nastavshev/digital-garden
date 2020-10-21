import express from 'express';
import session from 'express-session';
import FileStoreGeneral from 'session-file-store';
import authRouter from './routes/auth.js';
import indexRouter from './routes/index.js';
import modalsRouter from './routes/modal.js';
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
  const {
    name, grade, comment, datePlant,
  } = req.body.input;
  // console.log(name);
  const newGardenBed = await gardenBedModel({
    name,
    grade,
    comment,
    datePlant,
  });
  await newGardenBed.save();
  console.log(newGardenBed);
});

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/modals', modalsRouter);

app.listen(process.env.PORT || 3001, () => {
  console.log('I am work 3001');
});
