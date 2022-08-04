const db_data = require('./config.json');
// const Sequelize = require('sequelize');
const oracledb = require('oracledb');

const env = db_data.production;

const db_options = {
    user            : env.username,
    password        : env.password,
    connectString   : `${env.host}:${env.port}/${env.database}`,
    // logging: null,
}

async function connect ()  {
    try {
        let conn = await oracledb.getConnection(db_options);
        let sodadb = await conn.getSodaDatabase();
        return sodadb
    } catch (error) {
        console.log(error)
    }
}



module.exports = {
    conn: connect
}