import { Router } from 'express'
const router = Router();
const { getUsuarios, createUsuario } = require('../controller/usuariosController')

router
    .route("/")
    .get(getUsuarios)
    .post(createUsuario)

module.exports = router;