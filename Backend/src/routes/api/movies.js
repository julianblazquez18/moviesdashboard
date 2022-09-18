const express = require('express');
const router = express.Router();
const moviesAPIController = require('../../controllers/api/moviesAPIController');

//Listado de películas
router.get('/', moviesAPIController.list);
//Detalle de película
router.get('/:id', moviesAPIController.detail);

module.exports = router;