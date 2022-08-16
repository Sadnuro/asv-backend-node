// Packages
const  express = require('express');

// Services
const formDataService = require('../services/formDataService');

const getFormData = async (req, res) => {
    try {
        const result = await formDataService.getFormData();
        res.send( {status: 'successful', data: result } );
    } catch (error) {
        throw new Error(error.message);
    }
}


module.exports = {
    getFormData
}