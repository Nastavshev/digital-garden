import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  garden: [{
    type: mongoose.Types.ObjectId,
    ref: 'Garden',
  }],
});

export default mongoose.model('User', UserSchema);
