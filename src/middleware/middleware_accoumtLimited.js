const express = require("express");
const rateLimit = require("express-rate-limit");const app = express();

const accountLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hora
    max: 6, // limita cada IP a 6 peticiones por el tiempo definido con "windowMs"
    message: "Demasiadas peticiones realizadas, intenta despues de 1 hora"
  });


  module.exports = accountLimiter;