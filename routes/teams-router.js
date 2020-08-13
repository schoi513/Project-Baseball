const express = require('express');
const teamsController = require('../controllers/teams-controller');
const teamsRouter = express.Router();

teamsRouter.get('/', teamsController.index);
teamsRouter.post('/', teamsController.create);
 
module.exports = teamsRouter;