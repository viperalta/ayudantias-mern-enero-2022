const UserController = require('./controllers/user.controller');
const authenticate = require('./config/authenticate');
const WorkerController = require('./controllers/worker.controller');

module.exports = function(app){

    app.post("/api/register", UserController.Register);
    app.post("/api/login", UserController.Login);
    app.post("/api/logout", UserController.Logout);
    //Para acceder a estas rutas hay que estar autenticado.
    app.get("/api/users", authenticate, UserController.getAll);
    app.get('/api/user/:id', authenticate, UserController.getUser);

    //Rutas trabajadores
    app.post("/api/workers/new",WorkerController.createNewWorker);
    app.get("/api/workers",WorkerController.findAllWorkers);
    app.get("/api/workers/:id",WorkerController.findOneWorker);
    app.post("/api/workers/changeskill/:skill/:id",WorkerController.changeSkill);
    app.delete("/api/workers/delete/:id",WorkerController.deleteWorker);

}