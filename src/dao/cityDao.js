const oracleConn = require('../database/oracleConn');

/**
 * 
 * @returns All cities without filters
 */
const getAll = async () => {
    let connection;
    try {
        connection = await oracleConn();
        const result = await connection.execute(`SELECT * FROM CITIES`);

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

/**
 * 
 * @param {*} id 
 * @returns Return city with id_city will be equal to param value
 */
const getById =  async (id)=>{
    let connection;
    try {
        const query  = `SELECT * FROM CITIES WHERE ID_CITY = :id`; 
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

/**
 * 
 * @param {*} deptId 
 * @returns Return cities with id_department will be equal to param value.
 */
const getByDepartmentId = async (deptId) => {
    let connection;
    try {
        const query       = `SELECT * FROM CITIES WHERE ID_DEPARTMENT = :id`; 
        connection = await oracleConn();
        const result = await connection.execute(query, [deptId]);
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
    getByDepartmentId
};