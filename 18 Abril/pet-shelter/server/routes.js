const PetController = require ("../server/controllers/pet.controller");

module.exports = app => {
    app.post("/api/pets/new",PetController.createNewPet);
    app.get("/api/pets",PetController.findAllPets);
    app.get("/api/pets/:id",PetController.findOnePet);
    app.put("/api/pets/:id",PetController.updatePet);
    app.delete("/api/pets/:id",PetController.deletePet);
    app.post("/api/pets/addlike/:id",PetController.addLikeToPet);

}