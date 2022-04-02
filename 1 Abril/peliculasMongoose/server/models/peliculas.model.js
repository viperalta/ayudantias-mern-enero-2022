const mongoose = require("mongoose");

const PeliculaSchema = new mongoose.Schema({
    nombre:String,
    director:String
});

const Pelicula = mongoose.model("Pelicula",PeliculaSchema);

module.exports = Pelicula;