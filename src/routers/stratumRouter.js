// Packages
const express = require('express');
const router = express.Router();

// Controllers
const stratumController = require('../controllers/stratumController');

// Middlewares

// Routes
const route_path = '/stratum';

router.get(`${route_path}/`, stratumController.getAll);
router.get(`${route_path}/:id`, stratumController.getById);


module.exports = router;