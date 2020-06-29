export default (req, res, next) => {
  if (!req.isAdmin) {
    return res.status(400).json({ error: 'You are not a Admin!' });
  }
  return next();
};
