const {Client} = require('pg')

const client= new Client( {
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: 'rootUser',
    database: 'furniture_db'
})

client.connect();

client.query(`Select * from projects`, (err, res) => {
    if(!err){
        console.log(res.rows);
    } else {
        console.log(err.message);
    }
    client.end();
})