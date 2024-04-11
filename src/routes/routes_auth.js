const express = require('express');
const router = express.Router();
const controllerAuth = require('../controllers/controllers_auth');
const verifyToken = require('../middleware/middleware_auth');
const accountLimiter = require('../middleware/middleware_accoumtLimited');

router.post('/signin',verifyToken, accountLimiter,controllerAuth.signin);



module.exports = router;