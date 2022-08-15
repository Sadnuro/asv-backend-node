// Packages
const  express = require('express');

// Services
const countryService = require('../services/countryService');

const getAll = async (req, res) => {
    try {
        const result = await countryService.getAll();
        res.send( {status: 'successful', data: result } );
    } catch (error) {
        throw new Error(error.message);
    }
}

const getById = async (req, res) => {
    try {
        const params = req.params;
        const result = await countryService.getById(params.cityId)
        res.send( {status: 'successful', data: result } );
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    getAll,
    getById,

}