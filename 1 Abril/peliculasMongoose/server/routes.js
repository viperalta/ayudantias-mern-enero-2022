const PeliculaController = require ("../server/controllers/peliculas.controller")

module.exports = app =>{

    app.post("/api/peliculas/new",PeliculaController.createNewPelicula);
    app.get("/api/peliculas",PeliculaController.findAllPeliculas);
    app.get("/api/peliculas/:id",PeliculaController.findOnePelicula);
    app.put("/api/peliculas/update/:id",PeliculaController.updatePelicula);
    app.delete("/api/peliculas/delete/:id",PeliculaController.deletePelicula);

}