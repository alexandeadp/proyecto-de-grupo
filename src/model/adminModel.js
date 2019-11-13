import { Schema, model } from "mongoose";

const adminSchema = new Schema(
  {
    usuario: {
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
      required: true
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
  });

module.exports = model('Admin', adminSchema);