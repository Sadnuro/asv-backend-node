const oracleConn = require('../database/oracleConn');

/**
{
    "ID_DOC_TYPE": 1,
    "ABBREVIATION": "CC",
    "DOC_TYPE_NAME": "CEDULA DE CIUDADANIA"
}
 */
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

const insertOne =  async ({abbreviation, docTypeName})=>{
    let connection;
    try {
        const query = `INSERT INTO DOCUMENT_TYPES (ABBREVIATION, DOC_TYPE_NAME) 
             VALUES (:abbreviation, :docTypeName )`; 
        const values = [abbreviation, docTypeName];
        
        connection = await oracleConn();
        const result = await connection.execute(query, values); 
        connection.commit();
        return result;
    } catch (error) {
        connection.rollback();
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
    insertOne
};