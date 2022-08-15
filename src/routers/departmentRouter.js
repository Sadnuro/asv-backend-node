// Packages
const express = require('express');
const router = express.Router();

// Controllers
const departmentController = require('../controllers/departmentController');

// Middlewares

// Routes
const route_path = '/department';

router.get(`${route_path}/`, departmentController.getAll);
router.get(`${route_path}/:deptId`, departmentController.getById);
router.get(`${route_path}/country/:countryId`, departmentController.getByCountryId);

module.exports = router;