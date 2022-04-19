const mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');

const PetSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Nombre es obligatorio"],
        unique:true
    },
    type:{
        type:String,
        required:[true,"Tipo es obligatorio"]
    },
    description:{
        type:String,
        required:[true,"Descripcion es obligatoria"]
    },
    skills:{
        type:Array,
        required:[true,"Habilidades son obligatorias"]
    },
    likes:{
        type:Number,
        default:0
    }
})

PetSchema.plugin(uniqueValidator,{message:"El campo {PATH} debe ser único. '{VALUE}' ya existe"});

//Validacion en update
PetSchema.pre('findOneAndUpdate', function(next) {
    this.options.runValidators = true;
    next();
  });

const Pet = mongoose.model("Pet",PetSchema);

module.exports = Pet;