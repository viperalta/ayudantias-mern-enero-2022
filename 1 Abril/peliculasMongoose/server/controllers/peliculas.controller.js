const Pelicula = require("../models/peliculas.model");

module.exports.findAllPeliculas = (req,res) => {
    Pelicula.find()
        .then((allPeliculas)=>res.json({peliculas:allPeliculas}))
        .catch((err)=>res.json({message:"Algo salio mal",error:err}))
}

module.exports.createNewPelicula = (req,res)=>{
    Pelicula.create(req.body)
        .then((nuevaPelicula)=>res.json({pelicula:nuevaPelicula}))
        .catch((err)=>res.json({message:"Algo salio mal",error:err}))
}

module.exports.findOnePelicula = (req,res)=>{
    Pelicula.findOne({_id: req.params.id})
        .then((pelicula)=>res.json({pelicula:pelicula}))
        .catch((err)=>res.json({message:"Algo salio mal",error:err}))
}

module.exports.updatePelicula = (req,res)=>{
    Pelicula.findOneAndUpdate({_id: req.params.id},req.body,{new:true})
        .then((pelicula)=>res.json({pelicula:pelicula}))
        .catch((err)=>res.json({message:"Algo salio mal",error:err}))
}

module.exports.deletePelicula = (req,res)=>{
    Pelicula.deleteOne({_id: req.params.id})
    .then((result)=>res.json({resultado:result}))
    .catch((err)=>res.json({message:"Algo salio mal",error:err}))
}