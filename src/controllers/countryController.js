// Packages
const  express = require('express');

// Services
const countryService = require('../services/CountryService');

const getAll = async (req, res) => {
    try {
        console.log('HTTP')
        const result = await countryService.getAll();

        res.send( {status: 'successful', data: result } );
    } catch (error) {
        console.error( {Error: error} );
    }
}

const getById = async (req, res) => {
    try {
        const params = req.params;
        const result = await countryService.getById(params.cityId)

        res.send( {status: 'successful', data: result } );
    } catch (error) {
        console.error( {Error: error} );
    }
};

module.exports = {
    getAll,
    getById,

}