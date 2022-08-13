// Packages
const  express = require('express');

// Services
const cityService = require('../services/CityService');

const getAll = async (req, res) => {
    try {
        console.log('HTTP')
        const result = await cityService.getAll();

        res.send( {status: 'successful', data: result } );
    } catch (error) {
        console.error( {Error: error} );
    }
}

const getById = async (req, res) => {
    try {
        const params = req.params;
        const result = await cityService.getById(params.cityId)

        res.send( {status: 'successful', data: result } );
    } catch (error) {
        console.error( {Error: error} );
    }
};

const getByDepartmentId = async (req, res) => {
    try {
        const params = req.params;
        const result = await cityService.getByDepartmentId(params.deptId);
        
        res.send( {status: 'successful', data: result } );
    } catch (error) {
        console.error( {Error: error} );
    }
};


// const method = async (req, res) => {
//     let connection;
//     try {
//         connection = await oracleConn();
//         const result = await connection.execute(`SELECT * FROM CITIES WHERE `); // connection.execute(`SELECT * FROM CITIES`);
//         console.log(result);
//         return true

//     } catch (error) {
//         console.error( {Error: error} );
//     } finally {
//         try {
//             await connection.close();
//         } catch (error) {
//             console.error();
//         }
//     }
// };

module.exports = {
    getAll,
    getById,
    getByDepartmentId,
}