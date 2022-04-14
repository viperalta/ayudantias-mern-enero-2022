const PeliculaController = require ("../server/controllers/peliculas.controller")
const ReviewController = require("../server/controllers/review.controller")

module.exports = app =>{

    //PELICULAS
    app.post("/api/peliculas/new",PeliculaController.createNewPelicula);
    app.get("/api/peliculas",PeliculaController.findAllPeliculas);
    app.get("/api/peliculas/:id",PeliculaController.findOnePelicula);
    app.put("/api/peliculas/update/:id",PeliculaController.updatePelicula);
    app.delete("/api/peliculas/delete/:id",PeliculaController.deletePelicula);

    //REVIEWS
    app.post("/api/reviews/new",ReviewController.createNewReview);
    app.get("/api/reviews",ReviewController.findAllReviews);
    app.get("/api/reviews/:id",ReviewController.getReviewsOfPelicula);

}