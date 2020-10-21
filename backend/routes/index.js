import express from 'express';
import checkSession from '../middlewares/checkSession.js';
import gardenBedModel from '../models/gardenBedModel.js';
import commentModel from '../models/commentModel.js';
import vegetModel from '../models/vegetModel.js';
import articleModel from '../models/articleModel.js';
import moonCalendarModel from '../models/moonCalendarModel.js';

const router = express.Router();

router.get('/secret', checkSession, (req, res) => {
  res.json({
    email: req.session.user.email,
  });
});

router.get('/moonmonth', async (req, res) => {
  // console.log('getttttt');
  let monthFromBD;
  try {
    monthFromBD = await moonCalendarModel.find();
  } catch (error) {
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
    return res.status(404).json({
      errorMessage: error.message,
    });
  }
  res.status(200).json({ articlesFromBD });
});

// запись нового комментария в БД
router.post('/articles/:id/newMessage', async (req, res) => {
  // console.log(req.session.user);
  const { message, id } = req.body;
  // console.log(id, message);
  let newComment;
  try {
    newComment = new commentModel({
      commentText: message,
      commentDate: new Date(),
      authorId: req.session.user.id,
      // authorName: req.session.user.userName,
      articleId: id,
    });
    const currentArticle = await articleModel.findOne({ _id: id });
    currentArticle.comments.push(newComment);
    await currentArticle.save();
    await newComment.save();
    // console.log(newComment);
  } catch (error) {
    return res.status(404).json({
      errorMessage: error.message,
    });
  }
  return res.status(200).json({ newComment });
});

router.get('/articles/:id/:page', async (req, res) => {
  // console.log('>>>> get /articles/:idTheme');
  // console.log(req.params);
  const { id, page } = req.params;
  const options = {
    page,
    limit: 3,
  };
  let dataPagin;
  await commentModel.paginate({}, options, (error, result) => {
    if (error) {
      console.error(error);
    } else {
      dataPagin = result;
    }
  });
  let commentFromBD;
  const paginatArray = [];
  try {
    commentFromBD = await commentModel.find({ articleId: id })
      .skip(dataPagin.prevPage * dataPagin.limit)
      .limit(dataPagin.limit).sort({ date: -1 });

    commentFromBD = JSON.parse(JSON.stringify(commentFromBD));

    for (let i = 1; i <= dataPagin.totalPages; i++) {
      paginatArray.push({ page: `${i}` });
    }
  } catch (error) {
    return res.status(404).json({
      errorMessage: error.message,
    });
  }
  // console.log(commentFromBD, paginatArray);
  return res.status(200).json({ commentFromBD, paginatArray });
});

export default router;
