import express from 'express';
import Garden from '../models/Garden.js';
import User from '../models/User.js';

const router = express.Router();

router.post('/garden', async (req, res) => {
  const {
    title, comment, location,
  } = req.body.inputsGarden;
  const { idUser } = req.body;
  const newGarden = await new Garden({
    title,
    comment,
    location,
  });
  await newGarden.save();
  const userObj = await User.findOne({ _id: idUser }).populate('garden');
  userObj.garden.push(newGarden._id);
  userObj.save();
  res.status(200);
});

export default router;
