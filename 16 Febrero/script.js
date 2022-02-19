console.log("hola");

//retornar un arreglo los numeros del 1 al 100

function del1al100() {
  var arr = [];
  for (var i = 0; i <= 100; i=i+1) {
    arr.push(i);
  }
  return arr;
}

console.log(del1al100());

//obtener los primeros n valores de un arreglo

const arr1 = [6, 7, 8, 9, 0, 44, 55];

function obtenerN(n, arreglo) {
  var result = [];

  for (let i = 0; i <= n; i++) {
    result.push(arreglo[i]);
  }

  return result;
}

//guardar en un arreglo todos los numeros pares del 1 al 100

//guardar los multiplos de 3 en un arreglo, del 3 al 99

function multiplos3() {
  let result = [];

  for (var i = 3; i <= 99; i += 3) {
    result.push(i);
  }
  return result;
}

console.log(multiplos3());

function multiplos3b() {
  let result = [];

  for (var i = 3; i <= 99; i++) {
    if (i % 3 === 0) {
      result.push(i);
    }
  }
  return result;
}

console.log(multiplos3b());

//crear arreglo de n valores relleno con la palabra x

const arr2 = [3, 5, 6, 8, 9];

//invertir los valores de un arreglo

function invertir(arreglo) {
  let result = [];

  for (let i = arreglo.length - 1; i >= 0; i--) {
    result.push(arreglo[i]);
  }
}

//repetir los valores de un arreglo n veces

const arr3 = ["cristian", "gabriel", "lorena"];

function repetir(arreglo, n) {
  let result = [];

  for (let j = 0; j < arreglo.length; j++) {
    for (let i = 0; i < n; i++) {
      result.push(arreglo[j]);
    }
  }

  return result;
}

console.log(repetir(arr3,3));

//obtener un arreglo con los valores al cuadrado de un arreglo

function multiplicar(arreglo) {
  let result = [];

  for (let i = 0; i < arreglo.length; i++) {
    result.push(arreglo[i] * arreglo[i]);
  }

  return result;
}

console.log(multiplicar(arr2));

//sumar los valores de 2 arreglos. Comprobar para estoque tienen mismo # de elementos

const arr4=[1,2,3,4,1];
const arr5=[3,4,5,6];
const res=[4,6,8,10]

function sumarArreglos(arreglo1,arreglo2){


    let res=[];

    if(arreglo1.length===arreglo2.length){

        for(let i=0;i<arreglo1.length;i++){
            res.push(arreglo1[i]+arreglo2[i]);
        }
        return res;


    }else{
        console.log("los arreglos tienen diferewnte numero de elementos")
        return [];

    }

}

console.log(sumarArreglos(arr4,arr5));

//remover elementos de un arreglo si pertenecen a otro

//obtener un arreglo de objetos con las veces que se repite cada valor de un arreglo en otro

//function que indica cuantas veces se tiró un dedo hasta obtener 6

function clickB(boton){
    boton.style.backgroundColor="white";
    boton.style.padding="100px";
}
