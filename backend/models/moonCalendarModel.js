import mongoose from 'mongoose';

const moonCalendarSchema = mongoose.Schema({
  year: {
    titleYear: Number,
    month: [{
      nameMonth: String,
      imageCalendar: String,
      imageNature: String,
      imageCardMonth: String,
      shortInfo: {
        info: String,
      },
      plantSeed: [{
        crop: String,
        date: String,
      }],
      plantFlower: [{
        crop: String,
        date: String,
      }],
      plantSeedlings: [{
        crop: String,
        date: String,
      }],
      adverseDay: {
        title: String,
        date: String,
      },
      article: {
        title: String,
        text: [{
          paragraph: String,
        }],
      },
    }],
  },
});

export default mongoose.model('moonCalendar', moonCalendarSchema);
