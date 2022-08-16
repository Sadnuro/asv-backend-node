// Packages
const express = require('express');
const router = express.Router();

// Controllers
const postulationStatusController = require('../controllers/postulationStatusController');

// Middlewares

// Routes
const route_path = '/postulation-status';

router.get(`${route_path}/`, postulationStatusController.getAll);
router.get(`${route_path}/:id`, postulationStatusController.getById);


module.exports = router;