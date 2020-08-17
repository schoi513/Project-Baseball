const Team = require('../models/teams');

const teamsController = {
    index(req, res, next){
        Team.getAll()
            .then(teams => {
                res.render('teams/index', {
                    teams
                });
            }).catch(next);
    },

    create(req, res, next) {
        new Team({
            name: req.body.name,
            win: req.body.win,
            loss: req.body.loss,
            user_id: req.user.id,
        })
        .save()
        .then(team => {
            res.json({ team })
         }).catch(next)
    },
}

module.exports = teamsController;