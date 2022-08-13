const oracleConn = require('../database/oracleConn');

const getAll = async () => {
    let connection;
    try {
        connection = await oracleConn();
        const result = await connection.execute(`SELECT * FROM CITIES`);

        return result;
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
        console.log('DAO value: ', id)
        const query  = `SELECT * FROM CITIES WHERE ID_CITY = :id`; 
        
        connection = await oracleConn();
        const result = await connection.execute(query, [id]); 

        return result;
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

const getByDepartmentId = async (deptId) => {
    let connection;
    try {
        const query       = `SELECT * FROM CITIES WHERE ID_DEPARTMENT = :id`; 
        
        connection = await oracleConn();
        const result = await connection.execute(query, [deptId]);
        
        return result;
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
    getByDepartmentId
};