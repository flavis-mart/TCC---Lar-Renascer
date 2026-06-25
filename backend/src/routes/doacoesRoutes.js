const express = require('express');
const router = express.Router();
const basicAuth = require('../middlewares/authMiddleware');
const { registrarDoacao, listarDoacoes } = require('../controllers/doacoesController');

router.post('/', registrarDoacao); // Pública
router.get('/interno', basicAuth, listarDoacoes); // Protegida

module.exports = router;