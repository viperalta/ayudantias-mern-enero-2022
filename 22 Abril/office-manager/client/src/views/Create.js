import React,{useState} from 'react';
import WorkerForm from '../components/WorkerForm';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Create = () => {

    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const createWorker = (values) => {
        console.log(values);

        axios.post('http://localhost:8000/api/workers/new', values)
        .then(res=>{
            console.log("exitoso");
            navigate("/workers");
        }).catch((err)=>{
            console.log(err.response)
            const errorResponse = err.response.data.errors;
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
            {errors.map((err)=><div className={`alert alert-danger`} >{err} </div>)}
            <WorkerForm onSubmitProp={createWorker} ></WorkerForm>
            
        </div>
    );
}

export default Create;
