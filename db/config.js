require('dotenv').config();

const options = {
    query: e => {
        if (process.env.NODE_ENV === 'dev') {
         console.log(e.query);
        };
    },
};

const pgp = require('pg-promise')(options);

function setDatabase() {
    if(process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
        return pgp({
            database: DB_NAME,
            port: 5432,
            host: 'localhost',
        })
    } else {
        return pgp(process.env.DATABASE_URL)
    }
}


module.exports = setDatabase()