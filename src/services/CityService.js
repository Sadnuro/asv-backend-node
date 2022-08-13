const cityDAO = require('../dao/cityDao');

const getAllCities = async () => {
    let connection;
    try {
        const result = await cityDAO.getAllCities();
        return result; //res.send( {status: 'successful', data: result } );
    } catch (error) {
        console.error( {Error: error} );
    }
};

const getById =  async (id)=>{
    let connection;
    try {
        const result = await cityDAO.getById(id);

        return result; //res.send( {status: 'successful', data: result } );
    } catch (error) {
        console.error( {Error: error} );
    }
};

const getByDepartmentId = async (deptId) => {
    let connection;
    try {
        const result = await cityDAO.getByDepartmentId(deptId);
        
        return result;
    } catch (error) {
        console.error( {Error: error} );
    }
};

module.exports = {
    getAllCities,
    getById,
    getByDepartmentId
};