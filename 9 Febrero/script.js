console.log("hola");

var arr=["gato","perro","gato","elefante","jirafa"];

function removeString(palabra){
    for(var i=0;i<arr.length;i++){
        if(arr[i]===palabra){
            arr.splice(i,1);
        }
    }
}

removeString("gato");
console.log(arr);

var arr2=["gato","perro","gato","elefante","jirafa"];

console.log(arr2.indexOf("pez"));

function removeStringWhile(palabra){
    let index = arr2.indexOf(palabra);

    while(index>-1){
        arr2.splice(index,1);
        index=arr2.indexOf(palabra);
    }
}

removeStringWhile("gato");
console.log(arr2);
