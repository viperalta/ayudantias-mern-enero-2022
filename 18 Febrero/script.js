console.log("hola")

const arr=["Carolina","laura","Lorena","Vicente","Gabriel"];

function drawArray(){

    const arrayBox = document.getElementById("arrayBox");

    let arrayString = "["

    for(let i=0;i<arr.length;i++){
        arrayString+=arr[i]+",";
    }

    arrayString += "]";

    arrayBox.innerText=arrayString;

}

drawArray();

const select = document.getElementById("deleteItem");

function drawOptions(){

    let options="";

    for(let i=0;i<arr.length;i++){
        options+="<option value='"+i+"'>"+arr[i]+"</option>"
    }


    select.innerHTML=options;

}

drawOptions();

function drawContent(){
    drawArray();
    drawOptions();
    drawCards();
}

function borrarEntrada(){

    const deleteId = select.value;

    console.log(deleteId);

    arr.splice(deleteId,1);

    console.log(arr);
    drawContent();

}

function agregarValor(){

    const nuevoValor = document.getElementById("nuevaEntrada");

    arr.push(nuevoValor.value);
    drawContent();

}

function drawCards(){

    const cards = document.getElementById("cards");
    cards.innerHTML="";

    for(let i=0;i<arr.length;i++){

        var newCard = document.createElement("div");
        newCard.classList.add("card");
        newCard.id=i;

        var newP = document.createElement("p");
        //var textNode = document.createTextNode(arr[i]);
        // newP.append(textNode);
        newP.append(arr[i]);

        newCard.append(newP);
        cards.append(newCard);
        newP.addEventListener("click",clickP)

    }

}

drawCards();

function clickP(){
    console.log(this);
    var parent = this.parentElement;

    var newInput = document.createElement("input");
    newInput.type="text";
    newInput.value=this.innerText;
    newInput.classList.add("valor");

    var newButton = document.createElement("button");
    newButton.append("EDITAR VALOR");
    newButton.classList.add("boton");
    newButton.addEventListener("click",editarEntrada);

    parent.append(newInput);
    parent.append(newButton);

}

function editarEntrada(){
    console.log(this);

    var parent = this.parentElement;
    var inputV = parent.querySelector(".valor");
    var botonV = parent.querySelector(".boton");

    arr.splice(parent.id,1,inputV.value);

    inputV.remove();
    botonV.remove();
    drawContent();
}