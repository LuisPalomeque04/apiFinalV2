const Mensajes = require('../models/models_mensaje');

const enviarMensaje = async (req, res) => {
    try {
        const usuarioId = req.params.userId; 
        const { contenido } = req.body;
        
        const nuevoMensaje = new Mensajes({ usuario: usuarioId, contenido });
        await nuevoMensaje.save();
        res.status(201).json({ message: 'Mensaje enviado correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al enviar el mensaje' });
    }
};

const obtenerMensajes = async (req, res) => {
    try {
        const mensajes = await Mensajes.find().populate('usuario', 'Nombre');
        res.status(200).json(mensajes);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los mensajes' });
    }
};

module.exports = {
    enviarMensaje,
    obtenerMensajes
};
