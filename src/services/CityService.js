const { autoCommit, STMT_TYPE_ROLLBACK } = require('oracledb');
const cityDao = require('../dao/cityDao');

const getAll = async () => {
    try {
        const result = await cityDao.getAll();
        return result; 
    } catch (error) {
        throw new Error(error.message);
    }
};

const getById =  async (id)=>{
    try {
        const result = await cityDao.getById(id);
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getByDepartmentId = async (deptId) => {
    try {
        const result = await cityDao.getByDepartmentId(deptId);
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    getAll,
    getById,
    getByDepartmentId
};