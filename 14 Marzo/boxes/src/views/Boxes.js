import React from 'react';

const Boxes = (props) => {

    const {boxes} = props;


    return (
        <div className='boxes'>
            {
                boxes.map((caja,index)=> <div className='box' key={index} style={{backgroundColor:caja.color,width:parseInt(caja.ancho),height:parseInt(caja.alto)}} > {caja.color} </div> )
            }
        </div>
    );
}

export default Boxes;
