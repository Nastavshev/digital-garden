import mongoose from 'mongoose';

const GardenSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  // size: [Number],
  // beds: [{}],
  comment: String,
});

export default mongoose.model('Garden', GardenSchema);
