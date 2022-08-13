const cityDAO = require('../dao/cityDao');

const getAll = async () => {
    let connection;
    try {
        const result = await cityDAO.getAll();
        return result; //res.send( {status: 'successful', data: result } );
    } catch (error) {
        console.error( { Service: 'CityService', Error: error} );
    }
};

const getById =  async (id)=>{
    let connection;
    try {
        const result = await cityDAO.getById(id);

        return result; //res.send( {status: 'successful', data: result } );
    } catch (error) {
        console.error( { Service: 'CityService', Error: error} );
    }
};

const getByDepartmentId = async (deptId) => {
    let connection;
    try {
        const result = await cityDAO.getByDepartmentId(deptId);
        
        return result;
    } catch (error) {
        console.error( { Service: 'CityService', Error: error} );
    }
};

module.exports = {
    getAll,
    getById,
    getByDepartmentId
};