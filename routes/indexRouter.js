var express = require('express');
var router = express.Router();

const controller= require('../controllers/contMenuDetalle');

/* GET home page. */
router.get('/', controller.home);
router.get('/detalle/:id', controller.detalle);

module.exports = router;