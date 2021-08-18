//query selector
let variable = document.querySelector("h2");
console.log('variable %O', variable);

//get elementsbyId
let var2 = document.getElementById('caja1');
console.log('var2 %O', var2);

//getElementByName
let var3 = document.getElementsByName('form1');
console.log('var3 %O', var3);

//querySelectorAll devolvera una lista de nodos
let var4 = document.querySelectorAll('input');
console.log('var4 %O', var4[0].tagName);

//GetElementsByTagName atrapa elementos por el nombre de la etiqueta
let var5 = document.getElementsByTagName('input');
console.log('var5 %O', var5);

//Evento como atributo en html
function countRabbits(){
    for(let i =1; i<=3; i++){
        alert("Rabbit number " + i);
    }
}

//Evento como propiedad del DOM
document.getElementById('buttestdom').onclick = function() {
    alert("Gracias por presionar el boton");
}

//guardando el selector en una variable
const butonq = document.querySelector("button");

//agregando eventos a la variable con addEventListener

// butonq.addEventListener("mouseover", function (){
//     console.log("butonq %O", butonq)
//     alert("Pasaste el puntero aqui");
// });

function outmode(){
    alert("Quitaste el puntero de aqui");
};

butonq.addEventListener("mouseout", outmode);

//remover un evemto registrado por el usuario
butonq.removeEventListener("mouseout", outmode);

//OBJETO EVENT

const input2 = document.getElementById("caja2");

 input2.addEventListener('keyup', (e) => {
    console.log(e);
 });

 //PREVENT DEFAULT PARA FORMULARIOS
 const formq = document.querySelector('form');
 
 formq.addEventListener("submit", (e)=>{
    e.preventDefault();
 });

 const btadd = document.getElementById('btadd');

//  btadd.addEventListener('click', (e)=>{
//     console.log("valor de la caja 2: ", input2.value);
//  });

btadd.addEventListener('click', getCajaValue)

let arreglo = new Array();

 function getCajaValue(){     
     arreglo.push(input2.value);
     arreglo.forEach(function(e){
         console.log(e);
     });
    //  console.log("Texto de la caja 2: ",input2.value);
 }

 //agregar un atributocuando carga el body
addEventListener('load',(e)=>{
     input2.setAttribute("placeholder","Caja 2");
     console.log("el placeholder dice:", input2.attributes.placeholder.value)
  });

 //TARGTET
 const butona = document.getElementById("buttestdom2");

 butona.addEventListener('click', (e)=>{
    console.log(e.target);
 });

 //GALLERY TARGET
 const gallery = document.getElementById("gallery");

 gallery.addEventListener('click', (e)=> {
        console.log("elmate: ", e);
    //  if(e.target.textContent>=2 && e.target.textContent<=9){
        if(e.target.classList[0]=="gallery__item"){
         console.log(e.target.textContent);
         if(e.target.classList[1]==null){
        //  e.target.classList.add("red");
        e.target.classList.toggle("red");
         }else{
             if(e.target.classList[1]=="red"){
                e.target.classList.replace("red","green");  
             }else if(e.target.classList[1]=="green"){
                e.target.classList.replace("green","red");  
             }              
         }
    }
        console.log("clasexname: ", e.target.className);

 });
