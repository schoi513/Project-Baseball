const express = require('express');
const teamsController = require('../controllers/teams-controller');
const { loginRedirect, loginRequired } = require('../services/auth/auth-helper');
const usersController = require('../controllers/user-controller');
const teamsRouter = express.Router();

teamsRouter.get('/', teamsController.index);
teamsRouter.post('/', loginRequired, teamsController.create);
teamsRouter.get('/new', (req, res)=> {
    res.render('teams/new');
});

teamsRouter.get('/:id([0-9]+)', teamsController.show, (req,res) => {
    res.render('teams/show', {
        team: res.locals.team,
    })
});
teamsRouter.get('/:id([0-9]+)/edit', teamsController.show, (req, res)=> {
    res.render('teams/edit', {
        team: res.locals.team,
    })
});

teamsRouter.put('/:id([0-9]+)', teamsController.update);
teamsRouter.delete('/:id([0-9]+)', teamsController.delete);

module.exports = teamsRouter;