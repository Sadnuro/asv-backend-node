const postulationStatusDao = require('../dao/postulationStatusDao');

const getAll = async () => {
    try {
        const result = await postulationStatusDao.getAll();
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getById =  async (id)=>{
    try {
        const result = await postulationStatusDao.getById(id);
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    getAll,
    getById,
};