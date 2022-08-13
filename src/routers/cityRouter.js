// Packages
const express = require('express');
const router = express.Router();

// Controllers
const cityController = require('../controllers/cityController');

// Middlewares

// Routes
const route_path = '/city';

router.get(`${route_path}/`, cityController.getAllCities);
router.get(`${route_path}/:cityId`, cityController.getById);
router.get(`${route_path}/department/:deptId`, cityController.getByDepartmentId);


module.exports = router;