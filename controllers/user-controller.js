const bcrypt = require('bcryptjs');
const User = require('../models/user');

const usersController = {
  index(req, res, next) {
    res.json({
      message: 'hello world',
      user: req.user,
    })
  },
  create(req, res, next) {
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(req.body.password, salt);
    new User({
      username: req.body.username,
      email: req.body.email,
      password_digest: hash,
    })
      .save()
      .then((user) => {
        req.login(user, (err) => {
          if (err) return next(err);
          res.redirect('/user');
        });
      })
      .catch(next);
  },
};

module.exports = usersController;