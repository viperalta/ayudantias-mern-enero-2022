const mongoose = require("mongoose");

const PeliculaSchema = new mongoose.Schema({
    nombre:String,
    director:String,
    estreno:Number
});

const Pelicula = mongoose.model("Pelicula",PeliculaSchema);

module.exports = Pelicula;