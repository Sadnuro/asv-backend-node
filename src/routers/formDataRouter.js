// Packages
const express = require('express');
const router = express.Router();

// Controllers
const formDataController = require('../controllers/formDataController');

// Middlewares

// Routes
const route_path = '/';

router.get(`${route_path}/`, formDataController.getFormData);


module.exports = router;