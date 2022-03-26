const express = require("express");
const app=express();
const port = 8000;
app.use(express.json());

app.listen(port,()=>console.log("Escuchando puerto: "+port));

app.get("/api", (req,res)=>{
    res.json({mensaje:"soy la respuesta"})
});

let users = [
    {
        id:1,
        nombre:"Vicente"
    },
    {
        id:2,
        nombre:"Christian"
    },
    {
        id:3,
        nombre:"Esperanza"
    }
]

app.get("/api/users",(req,res)=>{
    res.json({usuarios:users})
})

app.post("/api/user/new",(req,res)=>{
    console.log(req.body);
    users.push(req.body);
    res.json({mensaje:"El usuario ha sido creado"});
})

app.get("/api/user/:id",(req,res)=>{
    console.log("Params",req.params.id);
    const userSelected = users.filter((user)=>parseInt(req.params.id)===user.id);
    res.json({usuario:userSelected[0]})
})

app.delete("/api/user/:id",(req,res)=>{
    console.log("Params",req.params.id);
    const usersRestantes = users.filter((user)=>parseInt(req.params.id)!==user.id);
    users=usersRestantes;
    res.json({usuario:usersRestantes})
})

app.put("/api/user/:id",(req,res)=>{
    console.log(req.body);
    const userAux = users.map((user)=>parseInt(req.params.id)===user.id?req.body:user)
    users=userAux;
    res.json({usuarios:users});
})

app.get("/api/user",(req,res)=>{
   console.log(req.query);
    res.json({mensaje:"hola"})
})



