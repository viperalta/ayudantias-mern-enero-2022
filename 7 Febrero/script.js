console.log("hola");

var num1=3;//integers
var num2=5;
var palabra="hola mundo"     //strings o cadenas
var palabra2="otra palabra"

console.log(num1*num2);
//* multiplicar
//+ sumar
// / dividir
// - restar

var pfinal=palabra+palabra2;
console.log(pfinal);
console.log(palabra.concat(palabra2));

//obtener un caracter especifico en una posicion de la palabra
console.log(palabra.charAt(0));

//substring: se obtiene un subconjunto de un string
console.log(palabra.substring(2,6));

//slice
console.log(palabra.slice(2,-2));

//determinar si un substring existe dentro de un string. 
console.log(palabra.includes("hola."));

//split. 
var palabra="DR-12345673-Holanda 1234-info"
console.log(palabra.split("-"));


var verdadero=true;
var falso=false;

//Arreglos

var arr=[0,1,2,3,4,5];

//push, agregar un valor al arreglo
console.log(arr.push(6));
console.log(arr);

//pop, retirar del arreglo el ultimo valor
arr.pop();
arr.pop();
console.log(arr);

//shift, retirar el primer eleemneto del arreglo
arr.shift();
console.log(arr);

var arr2 = [4,5,6]

//indexOf, obtener el indice en el que un elemento está en el arreglo
console.log(arr2.indexOf(6));

var palabras=["futbol","tenis","basket","volley"];

//splice, elimina el item del arreglo en un indice en particular
palabras.splice(2);

console.log(palabras);

document.querySelector(".titulo").innerText="desde javascript";

function clickearBoton(){
    if(document.querySelector(".ampolleta").innerText==="ON"){
        document.querySelector(".ampolleta").innerText="OFF";
        document.querySelector(".ampolleta").style.backgroundColor="white";
    }else{
        document.querySelector(".ampolleta").innerText="ON"
        document.querySelector(".ampolleta").style.backgroundColor="black";
    }
}

var num3=5;
var num4="5";

var numConvertido=parseInt(num4);

console.log(num3+parseInt(num4));

