import { Schema, model } from 'mongoose';

const nivelSchema = new Schema({
    nombre: {
        type: String,
        required: true
    }
})

module.exports = model('Nivel', nivelSchema);