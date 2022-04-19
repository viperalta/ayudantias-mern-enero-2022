const Pet = require("../models/pet.model");

module.exports.createNewPet = (req,res)=>{
    Pet.create(req.body)
        .then((newPet)=>res.json({pet:newPet}))
        .catch((err)=>res.status(500).json({message:"Algo salio mal",error:err}))
}

module.exports.findAllPets = (req,res) => {
    Pet.find().sort({name:'asc'})
        .then((allPets)=>res.json({pets:allPets}))
        .catch((err)=>res.json({message:"Algo salio mal",error:err}))
}

module.exports.findOnePet = (req,res)=>{
    Pet.findOne({_id: req.params.id})
        .then((pet)=>res.json({pet:pet}))
        .catch((err)=>res.json({message:"Algo salio mal",error:err}))
}

module.exports.updatePet = (req,res)=>{
    Pet.findOneAndUpdate({_id: req.params.id},req.body,{new:true})
        .then((pet)=>res.json({pet:pet}))
        .catch((err)=>res.status(500).json({message:"Algo salio mal",error:err}))
}

module.exports.deletePet = (req,res)=>{
    Pet.deleteOne({_id: req.params.id})
    .then((result)=>res.json({resultado:result}))
    .catch((err)=>res.json({message:"Algo salio mal",error:err}))
}

module.exports.addLikeToPet = async (req,res) => {
    try{
        const pet = await Pet.findById(req.params.id);
        pet.likes = pet.likes+1;
        await pet.save();
        res.json(pet);
    }catch(err){
        console.error(err);
        res.status(500).json({message:"Algo salio mal",error:err});
    }
    
}