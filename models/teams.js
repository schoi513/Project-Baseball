const db = require('../db/config');

class Team {
    constructor(team) {
        this.id = team.id || null;
        this.name = team.name;
        this.win = team.win;
        this.loss = team.loss;
        this.user_id = team.user_id;
    }

    static getAll(){
        return db.manyOrNone('SELECT * FROM teams ORDER BY id ASC').then(teams => {
            return teams.map(team => new this(team));
        });
    }

    save(){
        return db.one(`INSERT INTO teams (name, win, loss, user_id)
         VALUES ($/name/, $/win/, $/loss/, $/user_id/) 
         RETURNING *`,).then(team => Object.assign(this, team));
    }
}


module.exports = Team;