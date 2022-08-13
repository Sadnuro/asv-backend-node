const countryDAO = require('../dao/countryDao');

const getAll = async () => {
    let connection;
    try {
        const result = await countryDAO.getAll();
        return result; //res.send( {status: 'successful', data: result } );
    } catch (error) {
        console.error( { Service: 'CountryService', Error: error } );
    }
};

const getById =  async (id)=>{
    let connection;
    try {
        const result = await countryDAO.getById(id);

        return result; //res.send( {status: 'successful', data: result } );
    } catch (error) {
        console.error( { Service: 'CountryService', Error: error } );
    }
};



module.exports = {
    getAll,
    getById,
};