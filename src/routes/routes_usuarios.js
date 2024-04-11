const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/middleware_auth');
const contollerUsuarios = require('../controllers/controllers_usuarios')
const accountLimiter = require('../middleware/middleware_accoumtLimited')

router.get('/', accountLimiter,verifyToken, contollerUsuarios.obtenerUsuarios);
router.get('/:numCuarto',accountLimiter,verifyToken, contollerUsuarios.obtenerUsuarioPorNumCuarto);
router.post('/',verifyToken,accountLimiter, contollerUsuarios.agregarUsuario)
router.put('/:numCuarto', accountLimiter,verifyToken, contollerUsuarios.actualizarUsuario);
router.delete('/:numCuarto',accountLimiter, verifyToken, contollerUsuarios.eliminarUsuario);

module.exports = router;
