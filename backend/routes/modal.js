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
  res.json(newGarden);
});

router.post('/personal', async (req, res) => {
  const { idUser } = req.body;
  const userObj = await User.findOne({ _id: idUser }).populate('garden');
  res.json(userObj.garden);
});

router.post('/delete', async (req, res) => {
  const { deleteId, idUser } = req.body;
  await Garden.deleteOne({ _id: deleteId });
  const userObj = await User.findOne({ _id: idUser }).populate('garden');
  res.json(userObj.garden);
});

export default router;
