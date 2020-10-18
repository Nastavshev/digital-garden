import express from 'express';
import checkSession from '../middlewares/checkSession.js';

const router = express.Router();

router.get('/secret', checkSession, (req, res) => {
  res.json({
    email: req.session.user.email,
  });
});

export default router;
