// Packages
const  express = require('express');

// Services
const cityService = require('../services/cityService');

const getAll = async (req, res) => {
    try {
        const result = await cityService.getAll();
        res.send( {status: 'successful', data: result } );
    } catch (error) {
        throw new Error(error.message);
    }
}

const getById = async (req, res) => {
    try {
        const params = req.params;
        const result = await cityService.getById(params.cityId)
        res.send( {status: 'successful', data: result } );
    } catch (error) {
        throw new Error(error.message);
    }
};

const getByDepartmentId = async (req, res) => {
    try {
        const params = req.params;
        const result = await cityService.getByDepartmentId(params.deptId);
        res.send( {status: 'successful', data: result } );
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    getAll,
    getById,
    getByDepartmentId,
}