const mongoose = require("mongoose");

const WorkerSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: [true, "Nombre obligatorio"],
      },
      image: {
        type: String,
        required: [true, "Imagen obligatoria"],
      },
      experience: {
        type: Number,
        required: [true, "Experiencia obligatoria"],
      },
      direccion: {
        type: String,
        required: [true, "Direccion obligatoria"],
      },
      role: {
        type: String,
        required: [true, "Cargo obligatorio"],
      },
      skill1: {
        type: Boolean
      },
      skill2: {
        type: Boolean
      },
      skill3: {
        type: Boolean
      },
      
    },
    { timestamps: true }
  );

  
const Worker = mongoose.model('Worker', WorkerSchema);

module.exports = {WorkerSchema, Worker };