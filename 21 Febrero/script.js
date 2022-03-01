//Crea una funcion que recibe una nota y devuelve un console log segun esto
//3-5: A estudiar!
//5-6: Muy bien!
//6-7: Ninja!


//Crea una funcion que recibe un arreglo de notas y que retorna cuantas veces su nota fue A estudiar, muy bien o Ninja!
//Devuelve el resultado com string y como objeto. 2 funciones diferentes.

const cajas = document.getElementById("cajas");

function agregarCaja(){
    const color=document.getElementById("color");
    const caja=document.createElement("div");
    caja.classList.add("caja");
    console.log(color);
    caja.style.border="30px solid "+color.value;
    cajas.append(caja);
}



