import express from 'express';
import Garden from '../models/Garden.js';

const router = express.Router();

router.post('/garden', async (req, res) => {
  const {
    title, comment, location,
  } = req.body.inputsGarden;
  const newGarden = await new Garden({
    title,
    comment,
    location,
  });
  await newGarden.save();
  res.status(200);
});

export default router;
