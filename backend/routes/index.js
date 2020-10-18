import express from 'express';
import checkSession from '../middlewares/checkSession.js';
import gardenBedModel from '../models/gardenBedModel.js';
import vegetModel from '../models/vegetModel.js';
import moonCalendarModel from '../models/moonCalendarModel.js';

const router = express.Router();

// router.get('/secret', checkSession, (req, res) => {
//   res.json({
//     email: req.session.user.email,
//   });
// });

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

export default router;
