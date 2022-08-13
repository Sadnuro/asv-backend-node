// Packages
const express = require('express');
const router = express.Router();

// Controllers
const cityController = require('../controllers/cityController');

// Middlewares


// constants
const root = 'city';

// Routes
router.get('/', cityController.getAllCities);
router.get('/:cityId', cityController.getById);
router.get('/department/:deptId', cityController.getByDepartmentId);


module.exports = router;