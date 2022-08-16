const documentTypeDao = require('../dao/documentTypeDao');

const getAll = async () => {
    try {
        const result = await documentTypeDao.getAll();
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getById =  async (id)=>{
    try {
        const result = await documentTypeDao.getById(id);
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    getAll,
    getById,
};