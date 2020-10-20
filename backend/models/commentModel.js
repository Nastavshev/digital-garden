import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const commentSchema = mongoose.Schema({
  commentText: String,
  commentDate: String,
  articleId: {
    type: mongoose.Schema.Types.ObjectId, ref: 'articles',
  },
  articleName: {
    type: mongoose.Schema.Types.String, ref: 'articles',
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId, ref: 'users',
  },
  userName: {
    type: mongoose.Schema.Types.String, ref: 'users',
  },
});

commentSchema.plugin(mongoosePaginate);

export default mongoose.model('comment', commentSchema);
