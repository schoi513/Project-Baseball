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
        console.log(res.locals.user)
        new Team({
            name: req.body.name,
            win: req.body.win,
            loss: req.body.loss,
            user_id: res.locals.user
        })
        .save()
        .then((team) => {
            res.redirect('/teams')
         })
         .catch(next)
    },

    show(req, res, next) {
        Team.getById(req.params.id)
            .then(team => {
                res.locals.team = team;
                next();
            })
            .catch(next);
    },

    update(req, res, next) {
        Team.getById(req.params.id)
        .then(foundTeam => {
            foundTeam.update({
                name: req.body.name,
                win: req.body.win,
                loss: req.body.loss
            });
        }).then(updatedTeam => {
            res.redirect(`/teams/${updatedTeam.id}`);
        })
        .catch(next);
        
    },

    delete(req, res, next) {
        Team.getById(req.params.id)
            .then(team => {
                return team.delete();
            }).then(()=> {
                res.redirect('/teams')
            })
            .catch(next);
    }
}

module.exports = teamsController;