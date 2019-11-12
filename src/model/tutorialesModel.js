import { Schema, Model } from 'mongoose'

const tutorialesSchema = new Schema({
    tecnologias_id: {
        type: Number,
        required: true
    },
    admin_id: {
        type: Number,
        required: true
    },
    contenido: {
        type: String,
        required: true
    },
    imagen: {
        type: String,
        required: false
    },
    video: {
        type: String,
        required: false
    },
    descripcion: {
        type: String,
        required: true
    },
    nivel_id: {
        type: Number,
        required: true
    },
    fecha: {
        type: Date,
        default: Date.now,
        required: true
    },
    hidden: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    timestamps: true
})

module.exports = Model("tutoriales", tutorialesSchema);