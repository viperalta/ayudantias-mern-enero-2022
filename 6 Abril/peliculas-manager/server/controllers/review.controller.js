const { Review } = require("../models/review.model");
const Pelicula = require("../models/peliculas.model");

module.exports.createNewReview = async(req,res)=>{
    try{
        const {rating, content, creator, idPelicula} = req.body;
        const review = await Review.create({rating, content, creator});
        const pelicula = await Pelicula.findById(idPelicula).exec();
        pelicula.reviews.push(review);
        await pelicula.save();
        res.json(review);
    }catch(err){
        res.status(500).json(err);
    }
}

module.exports.findAllReviews = (req,res) => {
    Review.find()
        .then((allReviews)=>res.json({reviews:allReviews}))
        .catch((err)=>res.json({message:"Algo salio mal",error:err}))
}

module.exports.getReviewsOfPelicula = async(req,res)=> {
    try{
        const {id}=req.params;
        const pelicula = await Pelicula.findById(id).populate("reviews").exec();
        res.json(pelicula.reviews);
    }catch(err){
        res.status(500).json(err);
    }
}