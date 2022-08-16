const { autoCommit, STMT_TYPE_ROLLBACK } = require('oracledb');
const departmentDAO = require('../dao/departmentDao');

const getAll = async () => {
    try {
        const result = await departmentDAO.getAll();

        return result; 
    } catch (error) {
        throw new Error(error.message);
    }
};

const getById =  async (id)=>{
    try {
        const result = await departmentDAO.getById(id);

        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getByCountryId = async (countryId) => {
    try {
        const result = await departmentDAO.getByCountryId(countryId);
        
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    getAll,
    getById,
    getByCountryId
};