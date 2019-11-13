const usuarioCtrl = {};

const usuarioModel = require('../model/usuariosModel');

//const { nick, nombre, email, nivel_id, estrellas, rol_id, hidden } = req.body;

usuarioCtrl.getUsuarios = async (req, res) => {
    const usuario = await usuarioModel.find();
    res.json({usuario})
}

usuarioCtrl.createUsuario = async (req, res) => {
    const { nick, nombre, email, nivel_id, estrellas, rol_id, hidden } = req.body;
    const nuevoUsuario = new usuarioModel({
        nick,
        nombre,
        email,
        nivel_id,
        estrellas,
        rol_id,
        hidden
    })

    await nuevoUsuario.save();
    res.json({mensaje: "usuario guardado"})
}

module.exports = usuarioCtrl;