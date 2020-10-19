import mongoose from 'mongoose';

const GardenSchema = new mongoose.Schema({
  // userId: {
  //   type: ObjectId,
  //   required: true,
  //   unique: true,
  // },
  title: String,
  location: String,
  // size: [Number],
  // beds: [{}],
  comment: String,
});

export default mongoose.model('Garden', GardenSchema);
