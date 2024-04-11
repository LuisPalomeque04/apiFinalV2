const express = require('express')
const app = express();
const authRoutes = require('./src/routes/routes_auth');
const usuariosRoutes = require('./src/routes/routes_usuarios');
const mensajeRoutes = require('./src/routes/routes_mensajes');

app.use(express.json());
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/usuarios',usuariosRoutes);
app.use('/api/v1/mensaje',mensajeRoutes);


module.exports = app;