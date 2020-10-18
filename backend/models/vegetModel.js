import mongoose from 'mongoose';

const vegetSchema = mongoose.Schema({
  vegetableName: String,
  referenceInfo: {
    timeFromSowingToEmergence: {
      openGround: String,
      closedGround: String,
    },
    temperature: String,
  },
});

export default mongoose.model('vegetables', vegetSchema);
