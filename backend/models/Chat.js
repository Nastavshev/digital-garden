import mongoose from 'mongoose';

const ChatSchema = new mongoose.Schema({
  userId: {
    type: mongoose.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
  },
  messages: [{
    id: {
      type: mongoose.ObjectId,
      ref: 'User',
    },
    message: {
      type: String,
    },
  }],
});

export default mongoose.model('Chat', ChatSchema);
