// Packages
const  express = require('express');

// Services
const residenceTypeService = require('../services/residenceTypeService');

const getAll = async (req, res) => {
    try {
        const result = await residenceTypeService.getAll();
        res.send( {status: 'successful', data: result } );
    } catch (error) {
        throw new Error(error.message);
    }
}

const getById = async (req, res) => {
    try {
        const params = req.params;
        const result = await residenceTypeService.getById(params.id)
        res.send( {status: 'successful', data: result } );
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    getAll,
    getById,
}