import express from 'express';
import session from 'express-session';
import authRouter from './routes/auth.js';
import indexRouter from './routes/index.js';
import './misc/db.js';
import './misc/env.js';
import Garden from './models/Garden.js';

const app = express();

app.use(express.json());
app.use(express.static('public'));

app.use(session({
  secret: process.env.SESSION_KEY,
  resave: false,
  saveUninitialized: false,
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

app.post('/modaladdGarden', async (req, res) => {
  const {
    title, comment,
  } = req.body.inputsGarden;
  const newGarden = await new Garden({
    title,
    comment,
  });
  await newGarden.save();
  res.status(200);
});

app.use('/', indexRouter);
app.use('/auth', authRouter);

app.listen(process.env.PORT || 3001, () => {
  console.log('I am work 3001');
});
