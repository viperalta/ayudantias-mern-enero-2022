const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
  {
    rating: {
      type: Number,
      required: [true, "Asignar un rating es obligatorio"],
    },
    content: {
        type: String,
        required: [true, "El contenido de la reseña es requerido"],
      },
    creator:{
        type:String,
        required:[true,'El nombre del usuario creador es necesario']
    }
  },
  { timestamps: true }
);

const Review = mongoose.model("Review", ReviewSchema);

module.exports = { ReviewSchema, Review };