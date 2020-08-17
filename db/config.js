// const pgp = require('pg-promise')(options);
// require('dotenv').config();
// const DB_NAME = process.env.DB_NAME || "teams";

// // const options = {
// //     query: e => {
// //         if (process.env.NODE_ENV === 'dev') {
// //          console.log(e.query);
// //         };
// //     },
// // };

// // const pgp = require('pg-promise')(options);

// function setDatabase() {
//     if(process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
//         return pgp({
//             database: 'teams',
//             port: 5432,
//             host: 'localhost',
//         })
//     } else {
//         return pgp(process.env.DATABASE_URL)
//     }
// }


// module.exports = setDatabase()

//Below will change when I add the user auth or when publishing to heroku
const pgp = require('pg-promise')();
require('dotenv').config();
let dbData
if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
    dbData = {
        database: 'project_baseball',
        port: 5432,
        host: 'localhost',
    }
}
else if (process.env.NODE_ENV === 'production') {
    dbData = process.env.DATABASE_URL
}

// Niso Z helped out with the config code!!!


module.exports = pgp(dbData)