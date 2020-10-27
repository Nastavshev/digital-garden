import express from 'express';
import commentModel from '../models/commentModel.js';
import vegetModel from '../models/vegetModel.js';
import articleModel from '../models/articleModel.js';
import moonCalendarModel from '../models/moonCalendarModel.js';
import logger from '../misc/logger.js';

const router = express.Router();

router.get('/moonmonth', async (req, res) => {
  let monthFromBD;
  try {
    monthFromBD = await moonCalendarModel.find();
  } catch (error) {
    logger.error(error);
    return res.status(404).json({
      errorMessage: error.message,
    });
  }
  res.status(200).json({ monthFromBD });
});

router.get('/vegetables', async (req, res) => {
  let vegetFromBD;
  try {
    vegetFromBD = await vegetModel.find();
  } catch (error) {
    logger.error(error);
    return res.status(404).json({
      errorMessage: error.message,
    });
  }
  res.status(200).json({ vegetFromBD });
});

router.get('/articles', async (req, res) => {
  let articlesFromBD;
  try {
    articlesFromBD = await articleModel.find();
  } catch (error) {
    logger.error(error);
    return res.status(404).json({
      errorMessage: error.message,
    });
  }
  res.status(200).json({ articlesFromBD });
});

// запись нового комментария в БД
router.post('/articles/:id/newMessage', async (req, res) => {
  const { message, id } = req.body;
  let newComment;
  try {
    newComment = new commentModel({
      commentText: message,
      commentDate: new Date(),
      authorId: req.session.user.id,
      articleId: id,
    });
    const currentArticle = await articleModel.findOne({ _id: id });
    currentArticle.comments.push(newComment);
    await currentArticle.save();
    await newComment.save();
  } catch (error) {
    logger.error(error);
    return res.status(404).json({
      errorMessage: error.message,
    });
  }
  return res.status(200).json({ newComment });
});

router.get('/articles/:id/:page', async (req, res) => {
  const { id, page } = req.params;
  const options = {
    page,
    limit: 3,
  };
  let dataPagin;
  await commentModel.paginate({}, options, (error, result) => {
    if (error) {
      return error;
    }
    dataPagin = result;
  });
  let commentFromBD;
  const paginatArray = [];
  try {
    commentFromBD = await commentModel.find({ articleId: id })
      .skip(dataPagin.prevPage * dataPagin.limit)
      .limit(dataPagin.limit).sort({ date: -1 });

    commentFromBD = JSON.parse(JSON.stringify(commentFromBD));

    for (let i = 1; i <= dataPagin.totalPages; i += 1) {
      paginatArray.push({ page: `${i}` });
    }
  } catch (error) {
    logger.error(error);
    return res.status(404).json({
      errorMessage: error.message,
    });
  }
  return res.status(200).json({ commentFromBD, paginatArray });
});

export default router;
