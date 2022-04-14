const mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');

const fechaActual = new Date();

const PeliculaSchema = new mongoose.Schema({
    nombre:{
        type:String,
        required:[true,"Nombre es obligatorio"],
        unique:true
    },
    director:{
        type:String,
        required: [true, "Campo director es obligatorio"],
        minlength:[3, "Nombre del director debe ser mayor a 2 caracteres"]
    },
    estreno:{
        type:Number,
        required: [true, "Campo estreno es obligatorio"],
        min:[1896,"No puedes escoger un año anterior al 1896"],
        max:[fechaActual.getFullYear(),"No puedes escoger un año superior al presente"]
    },
    reviews:[{type:mongoose.Schema.Types.ObjectId,ref:'Review'}]
});

PeliculaSchema.plugin(uniqueValidator,{message:"El campo {PATH} ya existe"})

const Pelicula = mongoose.model("Pelicula",PeliculaSchema);

module.exports = Pelicula;