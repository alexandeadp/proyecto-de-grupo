import { Schema, model } from 'mongoose';

const usuariosSchema = new Schema({
    nick: {
        type: String,
        required: true,
        unique: true
    },
    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    nivel_id: {
        type: Number,
        required: true
    },
    estrellas: {
        type: Number,
        required: false
    },
    rol_id: {
        type: Number,
        required: true
    },
    hidden: {
        type: Boolean,
        required: true,
        default: false
    }
},{
    timestamps: true
})

module.exports = model("Usuarios", usuariosSchema);