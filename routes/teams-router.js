const express = require('express');
const teamsController = require('../controllers/teams-controller');
const teamsRouter = express.Router();

teamsRouter.get('/', teamsController.index);
teamsRouter.post('/', teamsController.create);
teamsRouter.get('/new', (req, res)=> {
    res.render('teams/new');
});

teamsRouter.get('/:id([0-9]+)', teamsController.show);

module.exports = teamsRouter;