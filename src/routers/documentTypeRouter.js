// Packages
const express = require('express');
const router = express.Router();

// Controllers
const documentTypeController = require('../controllers/documentTypeController');

// Middlewares

// Routes
const route_path = '/document-type';

router.get(`${route_path}/`, documentTypeController.getAll);
router.post(`${route_path}/`, documentTypeController.insertOne);
router.get(`${route_path}/:id`, documentTypeController.getById);


module.exports = router;