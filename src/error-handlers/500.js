'use strict';

module.exports = (err, req, res, next) => {
  res.status(500);
  res.json({
    route: req.path,
    message: err.message,
  });
};
