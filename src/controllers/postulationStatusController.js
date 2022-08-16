// Packages
const  express = require('express');

// Services
const postulationStatusService = require('../services/postulationStatusService');

const getAll = async (req, res) => {
    try {
        const result = await postulationStatusService.getAll();
        res.send( {status: 'successful', data: result } );
    } catch (error) {
        throw new Error(error.message);
    }
}

const getById = async (req, res) => {
    try {
        const params = req.params;
        const result = await postulationStatusService.getById(params.id)
        res.send( {status: 'successful', data: result } );
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    getAll,
    getById,
}