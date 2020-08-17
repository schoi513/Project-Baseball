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

    static getById(id){
        return db.oneOrNone('SELECT * FROM teams WHERE id = $1', id)
            .then(team => {
                if (team) return new this(team);
                else throw new Error('No team found'); 
            })
    }

    save(){
        return db.one(`INSERT INTO teams (name, win, loss, user_id)
         VALUES ($/name/, $/win/, $/loss/, $/user_id/) 
         RETURNING *`,).then(team => Object.assign(this, team));
    }

    update(changes){
        Object.assign(this, changes);
        return db.one(`UPDATE teams SET 
        name = $/name/,
        win = $/win/,
        loss = $/loss/
        WHERE id = $/id/
        RETURNING *`, this).then(team => Object.assign(this, team));
    }

    delete(){
        return db.none('DELETE FROM teams WHERE id = $1', this.id);
    }
}


module.exports = Team;