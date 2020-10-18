// export default [
//   {
//     email: 'mail@mail.ru',
//     password: '123',
//   }
// ];

import mongoose from 'mongoose';

// process.env.DB_URL

export default mongoose.connect('mongodb://localhost:27017/vasyn_garden', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
