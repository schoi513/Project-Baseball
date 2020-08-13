const db = require('../db/config');

class Team {
    constructor(team) {
        this.id = team.id || null;
        this.name = team.name;
    }

    static getAll(){
        return db.manyOrNone('SELECT * FROM teams ORDER BY id ASC').then(teams => {
            return teams.map(team => new this(team));
        });
    }

    save(){
        return db.one(`INSERT INTO teams (name)
         VALUES ($/name/) 
         RETURNING *`,).then(team => Object.assign(this, team));
    }
}


module.exports = Team;