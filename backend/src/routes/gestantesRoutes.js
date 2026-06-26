const express = require('express');
const router = express.Router();
const basicAuth = require('../middlewares/authMiddleware');
const { cadastrarGestante, listarGestantes } = require('../controllers/gestantesController');

router.post('/', cadastrarGestante); // Pública
router.get('/interno', basicAuth, listarGestantes); // Protegida

module.exports = router;