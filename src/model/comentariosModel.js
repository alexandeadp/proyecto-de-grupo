import { Schema, model } from 'mongoose';

const comentariosSchema = new Schema(
  {
    usuario_id: {
      type: Number,
      required: true
    },
    admin_id: {
      type: Number,
      required: true
    },
    comentario: {
      type: String,
      required: true
    },
    hidden: {
      type: Boolean,
      required: true,
      default: false
    }
  },{
    timestamps: true
  });

module.exports = model('Comentarios', comentariosSchema);