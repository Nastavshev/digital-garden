import express from 'express';
import logger from '../misc/logger.js';
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
    idUser
  });
  await newGarden.save();
  const userObj = await User.findOne({ _id: idUser }).populate('garden');
  userObj.garden.push(newGarden._id);
  userObj.save();
  res.json(newGarden);
});

router.get('/personal/:id', async (req, res) => {
  const idUser = req.params.id;
  const user = await User.findOne({ _id: idUser }).populate('garden');
  res.status(200).json(user.garden);
});

router.post('/delete', async (req, res) => {
  const { deleteId, idUser } = req.body;
  await Garden.deleteOne({ _id: deleteId });
  const user = await User.findOne({ _id: idUser }).populate('garden');
  res.json(user.garden);
});

router.get('/garden/:id', async (req, res) => {
  const { id } = req.params;
  let currentGarden;
  try {
    currentGarden = await Garden.findOne({ _id: id });
    res.json(currentGarden);
  } catch (err) {
    logger.error(err);
  }
});

export default router;
