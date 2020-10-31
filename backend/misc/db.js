import mongoose from 'mongoose';
import './env.js';

console.log('process.env.DB_URL >>>>>>>>>', process.env.DB_URL);

export default mongoose.connect(process.env.DB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});
