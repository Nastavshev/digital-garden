export default (req, res, next) => {
  if (req.session.user) {
    return next();
  }
  res.status(401).end();
};
