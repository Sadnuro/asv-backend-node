const countryDao = require('../dao/countryDao');

const getAll = async () => {
    try {
        const result = await countryDao.getAll();
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getById =  async (id)=>{
    try {
        const result = await countryDao.getById(id);

        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    getAll,
    getById,
};