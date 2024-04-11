const mongoose = require("mongoose");

const mensajeSchema = new mongoose.Schema({
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuarios',
        required: true
    },
    contenido: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        default: Date.now
    }
});

const Mensajes = mongoose.model('Mensajes', mensajeSchema);

module.exports = Mensajes;