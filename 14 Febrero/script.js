/* const arr = [1,2,"palabra",34];

arr.push("hola");

arr.pop(); */

/* function longArr(arr){
    return arr.length;
}

console.log(longArr(arr)); */



const array=["vanessa","gabriel","christian","esperanza"];

console.log(array[2]);
console.log(array["gabriel"]);

function posArr(elemento){
    return array.indexOf(elemento);
}

console.log(posArr("gabriel"));

function regresarValor(posicion,array){

    if(posicion>array.length-1 || posicion<0){
        console.log("no existe el valor");
    }else{
        return array[posicion];
    }

}

console.log(regresarValor(4,array));

const array2=["perro","vanessa","gabriel","christian","esperanza","paralelepipedo","gato"];

function palabraMasGrande(array){

    let masgrande="";

    for(let i=0;i<array.length;i++){
        if(array[i].length>masgrande.length){
            masgrande=array[i];
        }
    }

    return masgrande;
}

console.log(palabraMasGrande(array2));

const array3=["hoytu","perro","vanessa","gabriel","christian","esperanza","paralelepipedo","gato"];

function palabrasDeXCaracteres(numero,array){

    const res=[];

    for(let i=0;i<array.length;i++){
        if(array[i].length===numero){
            res.push(array[i]);
        }
    }

    return res;

}

console.log(palabrasDeXCaracteres(5,array3));

const persona = {
    nombre:{palabra:"vicente",genero:"masculino"},
    edad:34,
    stack:"mern"
}
persona.genero="masculino";

console.log(persona);

class Auto{
    constructor(marca,color,posicion){
        this.marca=marca;
        this.color=color;
        this.posicion=posicion;
    }

    avanzar(km){
        this.posicion+=km;
        console.log("tu posicion es"+this.posicion+" kilometros")
    }
}

const auto1=new Auto("mazda","rojo",0);

console.log("primero",auto1);
auto1.avanzar(10);
console.log(auto1);
auto1.avanzar(10);

/* const auto2=new Auto("mazda","rojo",0);
console.log(auto2);
auto2.avanzar(10);
console.log(auto2); */
/* 
class Animal{
    constructor(raza,edad){
        this.raza=raza;
        this.edad=edad;
    }
    aniversario(){
        this.edad++;
    }
}

const perro = new Animal("perro",3);
console.log(perro);
perro.aniversario();
console.log(perro); */


