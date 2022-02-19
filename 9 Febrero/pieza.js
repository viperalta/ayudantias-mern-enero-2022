function escogerTiempo(elemento){
    console.log(elemento.value);

    var pieza=document.querySelector(".pieza");

    if(elemento.value==="dia"){
        pieza.style.backgroundImage="url(src/dia.jpg)"
    }else{
        pieza.style.backgroundImage="url(src/noche.jpg)"
    }

}

function apretarInterruptor(){
    var ampolleta = document.querySelector(".ampolleta");
    console.log(ampolleta.style.backgroundImage);
    if(ampolleta.style.backgroundImage==='url("src/ampolletaOn.png")'){
        ampolleta.style.backgroundImage='url("src/ampolletaOff.png")'
    }else{
        ampolleta.style.backgroundImage='url("src/ampolletaOn.png")'
    }
}

function cambiarHorario(elemento){
    console.log(elemento.value);
    var hora=elemento.value.split(":")[0];
    var minuto=elemento.value.split(":")[1];
    console.log(hora);
    console.log(minuto);
}