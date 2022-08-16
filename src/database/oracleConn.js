const oracledb = require('oracledb');
const config = require('./config.json').development;

// Configura respuesta de Database como json o array.
// OUT_FORMAT_ARRAY      : { metaData: [{}, ...], rows: [ [], ... ] }
// OUT_FORMAT_OBJECT     : { metaData: [{}, ...], rows: [ {}, ... ] }
oracledb.outFormat  = oracledb.OUT_FORMAT_OBJECT;  // Array is default
oracledb.autoCommit = false;

const db_options = {
    user            : config.username,
    password        : config.password,
    connectString   : `${config.host}:${config.port}/${config.database}`
};

async function connect() {
    let connection;
    try {
        connection = await oracledb.getConnection(db_options);
        // const result = await connection.execute(`SELECT * FROM CITIES`);
        // console.log(result);
        return connection;
    } catch (error) {
        console.error( { MSG: "Cann't to connect with database", Error: error} );
    }
}

module.exports = connect;