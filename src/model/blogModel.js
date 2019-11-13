import { Schema, model } from "mongoose";

const blogSchema = new Schema(
  {
    admin_id: {
      type: Number,
      required: true
    },
    descripcion: {
      type: String,
      required: true
    },
    contenido: {
      type: String,
      required: true
    },
    tecnologia_id: {
      type: Number,
      required: true
    },
    url_imagen: {
      type: String,
      required: false
    },
    hidden: {
      type: Boolean,
      required: true,
      default: false
    }
  },{
    timestamps: true
  });

module.exports = model('Blog', blogSchema);