const express = require('express');
const userRouter = express.Router();

const authHelpers = require('../services/auth/auth-helper');
const usersController = require('../controllers/user-controller');
const teamsController = require('../controllers/teams-controller');

userRouter.get('/', authHelpers.loginRequired, teamsController.show, usersController.index);
userRouter.get('/new', authHelpers.loginRedirect, (req, res) => {
  res.render('auth/register');
});

userRouter.post('/', usersController.create);

module.exports = userRouter;