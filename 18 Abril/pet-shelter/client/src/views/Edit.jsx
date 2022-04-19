import React,{useState,useEffect} from 'react';
import { useParams,useNavigate } from "react-router-dom";
import axios from 'axios';
import PetForm from '../components/PetForm';

const Edit = () => {
    const {id} = useParams();
    const [pet, setPet] = useState()
    const navigate=useNavigate();
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/pets/" + id)
            .then((res)=>{
                setPet(res.data.pet);
                console.log(res.data.pet);
            })
    }, [])

    const editarMascota = (values) => {

        values.skills = [values.skill1,values.skill2,values.skill3];

        axios
        .put("http://localhost:8000/api/pets/" + id, values)
        .then((res) => {
          console.log(res);
          navigate("/");
        }).catch((err)=>{
            console.log(err.response)
            const errorResponse = err.response.data.error.errors;
            console.log(errorResponse);
                const errorArr=[];
                for(const key of Object.keys(errorResponse)){
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
        });


    }

    return (
        <div>
            <button onClick={()=>navigate("/")}>VOLVER AL HOME</button>
            edit {id}
            {errors.map((err)=><div>{err} </div>)}
            {pet && <PetForm iname={pet.name} itype={pet.type} idescription={pet.description} iskill1={pet.skills[0]} iskill2={pet.skills[1]} iskill3={pet.skills[2]} onSubmitProp={editarMascota}>
            </PetForm>}
            
        </div>
    );
}

export default Edit;
