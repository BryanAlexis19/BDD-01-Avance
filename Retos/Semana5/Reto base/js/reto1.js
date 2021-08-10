//ALGORITMO DEL PRODUCTOR DE LECHE

let l; //cantidad de litros de leche que se produce
const pg = 20; // precio del galon
let tg; //cantidad de galones que se produce
let ga;// ganancia por la entrega de la leche

l = prompt("Ingrese cantidad de litros de leche producida");

//cuando entrega le pagan en galones

tg = l * 3.785;

// calculo de la ganancia

ga = tg * pg;

//Imprimir el valor de la ganancia
alert("Ganancia: S/ " + ga);