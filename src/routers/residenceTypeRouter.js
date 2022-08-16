// Packages
const express = require('express');
const router = express.Router();

// Controllers
const residenceTypeController = require('../controllers/residenceTypeController');

// Middlewares

// Routes
const route_path = '/residence-type';

router.get(`${route_path}/`, residenceTypeController.getAll);
router.get(`${route_path}/:id`, residenceTypeController.getById);


module.exports = router;