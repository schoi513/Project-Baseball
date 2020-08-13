const express = require('express');
const teamsRouter = express.Router();

teamsRouter.get('/', (req, res) => {
    res.send('list of teams goes here');
});

module.exports = teamsRouter;