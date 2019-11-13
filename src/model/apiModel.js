import { Schema, model } from 'mongoose';

const apiSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true
    },
    api: {
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

module.exports = model('Api', apiSchema);