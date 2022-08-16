const oracleConn = require('../database/oracleConn');

const getAll = async () => {
    let connection;
    try {
        connection = await oracleConn();
        const result = await connection.execute(`SELECT * FROM DOCUMENT_TYPES`); 
        return result; 
    } catch (error) {
        console.error( {Error: error} );
    } finally {
        try {
            await connection.close();
        } catch (error) {
            throw new Error(error.message);
        }
    }
};

const getById =  async (id)=>{
    let connection;
    try {
        const query       = `SELECT * FROM DOCUMENT_TYPES WHERE ID_DOC_TYPE = :id`; 
        connection = await oracleConn();
        const result = await connection.execute(query, [id]); 
        return result;
    } catch (error) {
        throw new Error(error.message);
    } finally {
        try {
            await connection.close();
        } catch (error) {
            throw new Error(error.message);
        }
    }
};

module.exports = {
    getAll,
    getById,
};