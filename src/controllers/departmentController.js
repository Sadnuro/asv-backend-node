// Packages
const  express = require('express');

// Services
const departmentService = require('../services/departmentService');

const getAll = async (req, res) => {
    try {
        const result = await departmentService.getAll();
        res.send( {status: 'successful', data: result } );
    } catch (error) {
        // res.status(404).send({ status: 'failed', error: error.message})
        throw new Error(error.message);
    }
}

const getById = async (req, res) => {
    try {
        const params = req.params;
        const result = await departmentService.getById(params.deptId)
        res.send( {status: 'successful', data: result } );
    } catch (error) {
        // res.status(404).send({ status: 'failed', error: error.message})
        throw new Error(error.message);
    }
};

const getByCountryId = async (req, res) => {
    try {
        const params = req.params;
        const result = await departmentService.getByCountryId(params.countryId);
        res.send( {status: 'successful', data: result } );
    } catch (error) {
        // res.status(404).send({ status: 'failed', error: error.message})
        throw new Error(error.message);
    }
};

module.exports = {
    getAll,
    getById,
    getByCountryId,
}