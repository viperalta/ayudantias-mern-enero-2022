import React, {useState, useEffect} from 'react';
import { simpleGet3 } from '../actions/simpleGet3';
import Films from './Films';
import People from './People';
import Planets from './Planets';
import Species from './Species';
import Starships from './Starships';
import Vehicles from './Vehicles';


const Luke = () => {

    const [selected, setSelected] = useState();
    const [objetos, setObjetos] = useState();
    const [url, setUrl] = useState();
    const [objeto, setObjeto] = useState();


    const onChangeSelect = (e) => {
        setSelected(e.target.value)

    }

    const onChangeSave = (e) => {
        setUrl(e.target.value)
    }

    const renderInfo = () => {
        if(selected === "people"){
            return <People objeto={objeto}/>
        }
        if(selected === "films"){
            return <Films objeto = {objeto}/>
        }
        if(selected === "starships"){
            return <Starships objeto = {objeto}/>
        }
        if(selected === "vehicles"){
            return <Vehicles objeto = {objeto}/>
        }
        if(selected === "species"){
            return <Species objeto = {objeto}/>
        }
        if(selected === "planets"){
            return <Planets objeto = {objeto}/>
        }
        

    }

    useEffect(async() => {
        if(selected){
            const response = await simpleGet3("https://swapi.dev/api/" +selected);
            console.log(response);
            setObjetos(response.results);
        }
        console.log(selected)
    }, [selected]);

    useEffect(async() => {
        const response = await simpleGet3(url);
        console.log(response);
        setObjeto(response);
    }, [url]);

    return (
        <div className='container'>
            <div className='left'>
                <select className='select-1' required onChange={onChangeSelect}>
                        <option default>Selecciona una opción</option>
                        <option value="people">People</option>
                        <option value="films">Films</option>
                        <option value="starships">Starships</option>
                        <option value="vehicles">Vehicles</option>
                        <option value="species">Species</option>
                        <option value="planets">Planets</option>
                    </select>
                    <ol className='ul-1'>
                        {objetos && objetos.map((objeto, i)=><li key={i}>{objeto.name}{objeto?.title}</li>)}
                    </ol>
            </div>
                <div className='results'>
                    {
                        objetos && <select className='select-2' onChange={onChangeSave} name="" id="">
                        {objetos && objetos.map((objeto,i)=><option value={objeto.url} key={i}>{objeto.name}{objeto?.title}</option>)}
                    </select>
                    }
                    <div className='info'>
                        {objeto && renderInfo()}
                    </div>

                
                </div>
        </div>
    );
}

export default Luke;
