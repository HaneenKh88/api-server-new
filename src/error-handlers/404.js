'use strict';

module.exports = (req, res) => {
  res.status(404);
  res.json({
    route: req.path,
    message: 'Not Found',
  });
};
