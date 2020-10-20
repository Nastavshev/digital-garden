import mongoose from 'mongoose';

const articleSchema = mongoose.Schema({
  imageArticle: String,
  title: String,
  text: [{
    paragraph: String,
  }],
  comments: Array,
});

export default mongoose.model('article', articleSchema);
