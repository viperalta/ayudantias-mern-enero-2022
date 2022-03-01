let presupuesto=3000;

class Trabajador{

    constructor(nombre,edad,perro){
        this.nombre=nombre;
        this.edad=edad;
    }

}

const trabajador1=new Trabajador("Cristian",20);

//console.log(trabajador1);

class Desarrollador extends Trabajador{

    constructor(nombre,edad,billetera,sueldo){
        super(nombre,edad);
        this.billetera=billetera;
        this.sueldo=sueldo;
    }

}

const desarrollador1 = new Desarrollador("Christian",20,0,1001);



class Contador extends Trabajador{

    constructor(nombre,edad){
        super(nombre,edad);
    }

    pagarSueldo(desarrollador){
        console.log(presupuesto);
        if(desarrollador.sueldo<=presupuesto){
            desarrollador.billetera+=desarrollador.sueldo;
            presupuesto-=desarrollador.sueldo;
        }else{
            console.log("la empresa no tiene plata para pagarle a"+desarrollador.nombre)
        }

       /*  desarrollador.sueldo<presupuesto 
        ? desarrollador.billetera+=desarrollador.sueldo
        : console.log("la empresa no tiene plata para pagarle a"+desarrollador.nombre) */

    }
}

const contador1=new Contador("Daniel",20);

console.log(desarrollador1);
contador1.pagarSueldo(desarrollador1);
contador1.pagarSueldo(desarrollador1);
contador1.pagarSueldo(desarrollador1);
console.log(desarrollador1);

