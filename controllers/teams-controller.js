const Team = require('../models/teams');

const teamsController = {
    index(req, res, next){
        Team.getAll()
            .then(teams => {
                res.json({
                    teams
                });
            }).catch(next);
    },

    create(req, res, next) {
        new Team({
            name: req.body.name,
        })
        .save()
        .then(team => {
            res.json({ team })
         }).catch(next)
    },
}

module.exports = teamsController;