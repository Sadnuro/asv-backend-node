const oracleConn = require('../database/oracleConn');

const getAll = async () => {
    let connection;
    try {
        connection = await oracleConn();
        const result = await connection.execute(`SELECT * FROM COUNTRIES`); // connection.execute(`SELECT * FROM CITIES`);

        return result; //res.send( {status: 'successful', data: result } );
    } catch (error) {
        console.error( {Error: error} );
    } finally {
        try {
            await connection.close();
        } catch (error) {
            console.error(error);
        }
    }
};

const getById =  async (id)=>{
    let connection;
    try {
        const query       = `SELECT * FROM COUNTRY WHERE ID_COUNTRY = :id`; 
        
        connection = await oracleConn();
        const result = await connection.execute(query, id); // connection.execute(`SELECT * FROM CITIES`);

        return result; //res.send( {status: 'successful', data: result } );
    } catch (error) {
        console.error( {Error: error} );
    } finally {
        try {
            await connection.close();
        } catch (error) {
            console.error(error);
        }
    }
};


module.exports = {
    getAll,
    getById,
};