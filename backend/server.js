import express from 'express';
import mongoose from 'mongoose';
import session from 'express-session';
import authRouter from './routes/auth.js';
import indexRouter from './routes/index.js';
import './misc/db.js';
import './misc/env.js';

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

app.use('/', indexRouter);
app.use('/auth', authRouter);

app.listen(process.env.PORT ?? 3001, () => {
  console.log('I am work 3001');
});
