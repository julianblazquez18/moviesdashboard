const express = require('express');
const router = express.Router();
const seriesAPIController = require('../../controllers/api/seriesAPIController');

//Listado de series
router.get('/', seriesAPIController.list);
//Detalle de serie
router.get('/:id', seriesAPIController.detail);

module.exports = router;