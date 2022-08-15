const countryDAO = require('../dao/countryDao');

const getAll = async () => {
    try {
        const result = await countryDAO.getAll();
        return result; //res.send( {status: 'successful', data: result } );
    } catch (error) {
        throw new Error(error.message);
    }
};

const getById =  async (id)=>{
    try {
        const result = await countryDAO.getById(id);

        return result; //res.send( {status: 'successful', data: result } );
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    getAll,
    getById,
};