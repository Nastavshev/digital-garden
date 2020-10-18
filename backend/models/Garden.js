import mongoose, { ObjectId } from 'mongoose';

const GardenSchema = new mongoose.Schema({
  userId: {
    type: ObjectId,
    required: true,
    unique: true,
  },
  size: [Number],
  beds: [{}],
});

export default mongoose.model('Garden', GardenSchema);
