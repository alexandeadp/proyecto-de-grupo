import { Schema, model } from "mongoose";

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
        required:true,
        default: false
    }
},{
    timestamps: true
})

module.exports = model("Test", testSchema);