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
  gardenBedId: [{
    type: mongoose.Schema.Types.ObjectId, ref: 'gardenBeds',
  }],
});

export default mongoose.model('Garden', GardenSchema);
