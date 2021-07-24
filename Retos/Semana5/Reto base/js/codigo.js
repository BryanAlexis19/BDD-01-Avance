let estoEsUnaCadena = "una cadena";

let estoEsUnBoolean = true;
let estoEsOtroBoolean = false;

let estoEsUnObjeto = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 30,
    genero: "M",
    estado: "Buenos Aires",
    fechaNacimiento: "01/01/1991",
    email: "mail@gmail.com",
    telefono: "991746203",
};


let estoEsUnArray = [0,1,2,3,4,5,6,7];

//declarar constantes con const
const variable = "variable con valor string"

let b = "5";
let a = 3;


let suma2 = a + b;
console.log(suma2);

if(typeof(b) == "number"){
    console.log(a+b);
}else{
    console.log("No deberias de sumar un numero con una cadena de texto");
}

//Vamos a hacer un algoritmo para encontrar un numero par
let arrayDeNumeros = [1,2,3,4,5,7,8,9,10];

//1. Voy a recorrer mi array de numeros

//2. buscar el numero

//3. Hare una condicion para saber si es numero es par

//4. Imprimire ese numero que encuentre y tambien imprima una frase que diga te encontre

for(let i = 0; i<arrayDeNumeros.length; i++){
    if(arrayDeNumeros[i] % 2 ==0){
        console.log(arrayDeNumeros[i]);
        console.log("Te encontre");
    }else{
        console.log("No te encontre");
    }
}