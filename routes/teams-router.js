const express = require('express');
const teamsController = require('../controllers/teams-controller');
const teamsRouter = express.Router();

teamsRouter.get('/', teamsController.index);
teamsRouter.post('/', teamsController.create);
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


module.exports = teamsRouter;