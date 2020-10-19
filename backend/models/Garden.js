import mongoose from 'mongoose';

const GardenSchema = new mongoose.Schema({
  // userId: {
  //   type: ObjectId,
  //   required: true,
  //   unique: true,
  // },
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
