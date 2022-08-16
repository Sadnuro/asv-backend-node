// Packages
const express = require('express');
const router = express.Router();

// Controllers
const countryController = require('../controllers/countryController');

// Middlewares

// Routes
const route_path = '/country';

router.get(`${route_path}/`, countryController.getAll);
router.get(`${route_path}/:countryId`, countryController.getById);


module.exports = router;