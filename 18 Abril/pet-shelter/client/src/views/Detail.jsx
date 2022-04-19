import React,{useState,useEffect} from 'react';
import { useParams,useNavigate } from "react-router-dom";
import axios from 'axios';

const Detail = () => {

    const {id} = useParams();
    const [pet, setPet] = useState({})
    const [likes,setLikes] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/pets/" + id)
            .then((res)=>{
                setPet(res.data.pet);
                setLikes(res.data.pet.likes);
                console.log(res.data.pet);
            })
    }, [])

    const addLike = () => {
        axios.post("http://localhost:8000/api/pets/addlike/"+id)
        .then((res)=>{
             console.log("like exitoso")
             setLikes((old)=>old+1);
        })
    }

    return (
        <div>
            <button onClick={()=>navigate("/")}>VOLVER AL HOME</button>
            <p>Name: {pet.name}</p>
            <p>Type: {pet.type}</p>
            <p>Description: {pet.description}</p>
            <p>Habilidades</p>
            <ul>
                {pet?.skills?.map((skill,i)=>{
                    return(<li>{skill} </li>)
                })}
            </ul>
            {pet && pet.skills && <ul>
               <li>{pet.skills[0]} </li>
               <li>{pet.skills[1]} </li>
               <li>{pet.skills[2]} </li>
            </ul>}
            <button onClick={addLike}>LIKE</button>
            <p>{likes} likes </p>
        </div>
    );
}

export default Detail;
