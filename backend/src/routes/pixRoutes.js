const express = require('express');
const router = express.Router();
const { gerarPix } = require('../controllers/pixController');

router.get('/', gerarPix);

module.exports = router;