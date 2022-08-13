const express = require('express');
const oracleConn= require('../database/oracleConn')


const getAllCities = async (req, res) => {
    let connection;
    try {
        connection = await oracleConn();

        const result = await connection.execute(`SELECT * FROM CITIES -- WHERE ROWNUM = 1`); // connection.execute(`SELECT * FROM CITIES`);
        // console.log(result);

        res.send( {status: 'successful', data: result } );
    } catch (error) {
        console.error( {Error: error} );
    } finally {
        try {
            await connection.close();
        } catch (error) {
            console.error();
        }
    }
}

const getById = async (req, res) => {
    let connection;
    try {
        const params = req.params;
        const queryParams = [
            params.cityId
        ];

        const query       = `SELECT * FROM CITIES WHERE ID_CITY = :id`; 
        
        connection = await oracleConn();
        const result = await connection.execute(query, queryParams); // connection.execute(`SELECT * FROM CITIES`);

        res.send( {status: 'successful', data: result } );
    } catch (error) {
        console.error( {Error: error} );
    } finally {
        try {
            await connection.close();
        } catch (error) {
            console.error();
        }
    }


    // const byName = `SELECT * FROM CITIES WHERE CITY_NAME = 'VALLEDUPAR'`;
};

const getByDepartmentId = async (req, res) => {
    let connection;
    try {
        const params = req.params;
        const queryParams = [
            params.deptId
        ];

        const query       = `SELECT * FROM CITIES WHERE ID_DEPARTMENT = :id`; 
        
        connection = await oracleConn();
        const result = await connection.execute(query, queryParams);
        
        res.send( {status: 'successful', data: result } );
    } catch (error) {
        console.error( {Error: error} );
    } finally {
        try {
            await connection.close();
        } catch (error) {
            console.error();
        }
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
    getAllCities,
    getById,
    getByDepartmentId
}