

const person = { 
    firstName: 'Bob', 
    lastName: 'Marley', 
    email: 'bob@marley.com', 
    password: 'sekureP@ssw0rd9', 
    username: 'barley', 
    createdAt: 1543945177623
};
console.log(person.firstName);

const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

const [animalPrimero,animalSegundo,...resto]=animals;
console.log(animalPrimero);
console.log(animalSegundo);
console.log(resto);

const animalsCopy = [...animals, "perro","gato",animalPrimero];
console.log("copy",animalsCopy);


/* 
const primero=animals[0];
const segundo=animals[1]; */
//const primero="horse";

const [primero,segundo]=animals;

//const {email} = person;
//const email="hola@nose.com"

const {email,password} = person

//console.log(otroMail);

person.email="nuevomail";

console.log(person);
//console.log(otroMail);


class Person{
    constructor(f,l){
        this.firstName=f;
        this.lastName=l;
        this.distancia=0;
    }
    correr(d){
        this.distancia+=d;
    }
}

const persona = new Person ("vicente","peralta");
console.log(persona.distancia);
persona.correr(20);
console.log(persona.distancia);