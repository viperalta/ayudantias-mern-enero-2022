import React,{useState} from 'react';
import PetForm from '../components/PetForm';
import Detail from './Detail';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Create = () => {

    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const crearMascota = (values) => {
        
        values.skills = [values.skill1,values.skill2,values.skill3];

        axios.post('http://localhost:8000/api/pets/new', values)
        .then(res=>{
            console.log("exitoso");
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
        })
 
    }

    return (
        <div>
             {errors.map((err)=><div>{err} </div>)}
            <PetForm iname="" itype="" idescription="" iskill1="" iskill2="" iskill3="" onSubmitProp={crearMascota}>
            </PetForm>
        </div>
    );
}

export default Create;
