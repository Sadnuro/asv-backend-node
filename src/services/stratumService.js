const stratumDao = require('../dao/stratumDao');

const getAll = async () => {
    try {
        const result = await stratumDao.getAll();
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getById =  async (id)=>{
    try {
        const result = await stratumDao.getById(id);
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    getAll,
    getById,
};