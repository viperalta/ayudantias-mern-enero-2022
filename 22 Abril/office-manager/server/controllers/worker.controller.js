const { Worker, WorkerSchema } = require("../models/worker.model");

module.exports.createNewWorker = async(req,res)=>{

    try{
        const workersJefe = await Worker.find({role:"Jefe"}).exec();
        if (workersJefe.length===1 && req.body.role === "Jefe"){
            res
            .status(500)
            .json({ errors: { error: { message: "Ya existe un Jefe" } } });
        }else{
            const worker = new Worker(req.body);
            await worker.save();
            return res
                .json({worker:worker});
        }

    }catch(error){
        res.status(500).json(err);
    }
}

module.exports.findAllWorkers = (req,res) => {
    Worker.find().sort({name:'asc'})
        .then((allWorkers)=>res.json({workers:allWorkers}))
        .catch((err)=>res.json({message:"Algo salio mal",error:err}))
}

module.exports.findOneWorker= (req,res)=>{
    Worker.findOne({_id: req.params.id})
        .then((worker)=>res.json({worker:worker}))
        .catch((err)=>res.json({message:"Algo salio mal",error:err}))
}

module.exports.changeSkill = async (req,res) => {

    try {
        const worker = await Worker.findById(req.params.id);

        if(req.params.skill === "1"){
            worker.skill1=!worker.skill1;
        }
        if(req.params.skill === "2"){
            worker.skill2=!worker.skill2;
        }
        if(req.params.skill === "3"){
            worker.skill3=!worker.skill3;
        }

        await worker.save();
            return res
                .json({worker:worker});

    }catch(err){
        res.status(500).json(err);
    }
}

module.exports.deleteWorker = (req,res)=>{
    Worker.deleteOne({_id: req.params.id})
    .then((result)=>res.json({resultado:result}))
    .catch((err)=>res.json({message:"Algo salio mal",error:err}))
}