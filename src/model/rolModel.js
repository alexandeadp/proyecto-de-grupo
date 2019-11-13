import { Schema, model } from 'mongoose';

const rolSchema = new Schema({
    nombre: {
        type: String,
        required: true
    }
})

module.exports = model('Rol', rolSchema);