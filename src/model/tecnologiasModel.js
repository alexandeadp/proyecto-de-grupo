import { Schema, model } from 'mongoose';

const tecnologiasSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    hidden: {
        type: Boolean,
        required: true,
        default: false
    }
})

module.exports = model('Tecnologias', tecnologiasSchema);