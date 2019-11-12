import { Schema, Model } from 'mongoose';

const testSchema = new Schema({
    descripcion:{
        type: String,
        required: true
    },
    nivel_id: {
        type: String,
        required: true
    },
    usuario_id: {
        type: Number,
        required: false
    },
    fin: {
        type: Boolean,
        required: true
    },
    fecha_inicio: {
        type: Date,
        required:true
    },
    fecha_fin:{
        type: Date,
        required: true
    },
    hidden: {
        type: Boolean,
        required:true
    }
},{
    timestamps: true
})

module.exports = Model('test', testSchema);