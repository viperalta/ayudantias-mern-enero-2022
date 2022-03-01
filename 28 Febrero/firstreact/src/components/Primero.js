import React, { Component } from 'react';

class Primero extends Component {

    constructor(props){
        super(props);
        this.state={edad:this.props.edad,nombre:this.props.nombre}
    }

    aumentarEdad(){
        const newEdad = this.state.edad+1;
        this.setState({edad:newEdad});
    }


    render() {
        return (
            <div>
                <h1>hola {this.props.nombre},{this.props.edad} </h1>
                <h2> {this.props.edad>20?"eres viejo":"eres joven"} </h2>
                <h3>Mi edad es : {this.state.edad} </h3>
                <button onClick={()=>this.aumentarEdad()}>Aumentar</button>
            </div>
        );
    }
}

export default Primero;
