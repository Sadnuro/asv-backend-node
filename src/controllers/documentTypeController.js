// Packages
const  express = require('express');

// Services
const documentTypeService = require('../services/documentTypeService');

const getAll = async (req, res) => {
    try {
        const result = await documentTypeService.getAll();
        res.send( {status: 'successful', data: result } );
    } catch (error) {
        throw new Error(error.message);
    }
}

const getById = async (req, res) => {
    try {
        const params = req.params;
        const result = await documentTypeService.getById(params.id)
        res.send( {status: 'successful', data: result } );
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    getAll,
    getById,

}