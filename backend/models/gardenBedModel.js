import mongoose from 'mongoose';

const gardenBedSchema = mongoose.Schema({
  name: String,
  grade: String,
  comment: String,
  datePlant: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  gardenId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'gardens',
  },
  id: 'string',
  // userName: {
  //     type: mongoose.Schema.Types.String, ref: 'users',
  // }
});

export default mongoose.model('gardenBeds', gardenBedSchema);
