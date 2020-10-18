import express from 'express';
import session from 'express-session';
import authRouter from './routes/auth.js';
import indexRouter from './routes/index.js';
import './misc/db.js';
import './misc/env.js';

const app = express();

app.use(express.json());
app.use(session({
  secret: process.env.SESSION_KEY,
  resave: false,
  saveUninitialized: false,
}));

app.use('/', indexRouter);
app.use('/auth', authRouter);

app.listen(process.env.PORT ?? 3001, () => {
  console.log('I am work 3001');
});
