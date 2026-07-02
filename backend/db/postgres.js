const { Pool } = require('pg');
 

const pool = new Pool({
    connectionString: process.env.SUPABASE_URL,
    //     ssl: {
    //     rejectUnauthorized: false
    // }, 
    // family: 4
});

pool.query('SELECT NOW()')
    .then(result => {
        console.log(result.rows);
    })
    .catch(err => {
        console.error(err);
    });

module.exports = pool;