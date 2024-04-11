const express = require('express');
const router = express.Router();
const controllerMensaje = require('../controllers/controllers_mensaje');
const accountLimiter = require('../middleware/middleware_accoumtLimited');


router.post('/enviar/:userId',accountLimiter,controllerMensaje.enviarMensaje);

router.get('/mensajes',accountLimiter,controllerMensaje.obtenerMensajes);




module.exports = router;