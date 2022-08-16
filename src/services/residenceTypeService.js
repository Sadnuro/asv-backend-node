const residenceTypeDao = require('../dao/residenceTypeDao');

const getAll = async () => {
    try {
        const result = await residenceTypeDao.getAll();
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getById =  async (id)=>{
    try {
        const result = await residenceTypeDao.getById(id);
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    getAll,
    getById,
};