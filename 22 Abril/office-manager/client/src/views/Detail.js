import React,{useState,useEffect} from 'react';
import { useParams,useNavigate } from "react-router-dom";
import axios from 'axios';

const Detail = () => {

    const {id} = useParams();
    const [worker, setWorker] = useState({})
    const navigate = useNavigate();
    const [skill1, setSkill1] = useState();
    const [skill2, setSkill2] = useState()
    const [skill3, setSkill3] = useState()

    useEffect(() => {
        axios.get("http://localhost:8000/api/workers/" + id)
            .then((res)=>{
                setWorker(res.data.worker);
                console.log(res.data.worker);
                setSkill1(res.data.worker.skill1);
                setSkill2(res.data.worker.skill2);
                setSkill3(res.data.worker.skill3);
            })
    }, [])

    const changeSkill = (skillNumber) => {
        axios.post('http://localhost:8000/api/workers/changeskill/'+skillNumber+"/"+id)
        .then(res=>{
            console.log("resulto")
            if(skillNumber === 1){
                const original = skill1;
                console.log(original);
                setSkill1(!original);
            }
            if(skillNumber === 2){
                const original = skill2;
                setSkill2(!original);
            }
            if(skillNumber === 3){
                const original = skill3;
                setSkill3(!original);
            }

        }).catch((err)=>{
            
        })
    }


    return (
        <div>
            <p>Nombre: {worker.name}</p>
            <p>Cargo: {worker.role}</p>
            <p>Direccion: {worker.direccion}</p>
            <p>Habilidad 1: {skill1?"SI":"NO"} </p> <button onClick={()=>changeSkill(1)}>{skill1?"NO":"SI"}</button>
            <p>Habilidad 2: {skill2?"SI":"NO"} </p> <button onClick={()=>changeSkill(2)}>{skill2?"NO":"SI"}</button>
            <p>Habilidad 3: {skill3?"SI":"NO"} </p> <button onClick={()=>changeSkill(3)}>{skill3?"NO":"SI"}</button>
            
        </div>
    );
}

export default Detail;
