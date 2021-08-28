//ARCHIVO DE TEORIA SOBRE LA SEMANA 8

//1. FUNCIONES ARROW O FLECHA

    //Para una sola declaracion no se utiliza retorno
    //tampoco llaves de apertura ni cierre
    const suma = (a,b)=> a + b;
    console.log(suma(3,5));

    //Para funciones con mas de una sentencia se usa return    
    const resta = (a,b) => {
        console.log('Hola soy una funcion flecha');
        return a - b;
    }
    console.log(resta(10,8));
//2. PARAMETROS REST
    //Recibe valores como si fuera un array    
    function sumando(...rest) {
        console.log('rest', rest);
        for (let index = 0; index < rest.length; index++) {
            console.log(rest[index]);            
        }
    }
    sumando(1,2,3,4,5);

    //SPREAD OPERATOR
    function restar(a,b,c,d,e){
        console.log(a,b,c,d,e);
    }

    restar(...[1,2,3,4,5]);

    //Fusionando objetos con spread oper
    const objeto1 = {
        names: "Luis",
        age: 29
    }

    const objeto2 = {
        ...objeto1,
        lastName: "Diaz"
    }

    console.log(objeto2);

    //Fusion de arrays

    const array1 = [1,2,3];
    const array2 = [3,4,5,6];

    const total = [...array1, ...array2];

    console.log('total', total);

//3. TEMPLATE STRING - CONCATENAR TEXTO CON VARIABLES con `` y ${}

 const nombre1 = "Bryan";
 const nombre2 = "Dreyfus";

 console.log(`Mi nombre es: ${nombre1} y mi apellido es ${nombre2}`);

    //Con funcionees que retornan un valor

    function getName(nombrex){
        return nombrex;
    }

console.log(`Mi nombre es ${getName('Alexis')}`)

//4. DESTRUCTURING OBJETOS
    //Desctructurar el un objeto simple guardando sus valores en una variable

    const {
        names,
        age,
        lastName
    } = objeto2;

    console.log('Objeto2 values', names, age, lastName);

    //Destructurar un objeto anidado
        //Declarando el objeto
    objetoNested = {
        Categoria : {
            uno:{
                idCateg : "Categ01",
                NomCateg : "Solventes"
            },
            dos:{
                idCateg :"Categ02",
                NomCateg : "Comestibles"  
            }            
        },
        Proveedor : {
            zona1 :{
                idProv :"Prov01",
                nomProv: 'Faber Castell'
            },
            zona2: {
                idProv : "Prov02",
                nomProv: 'Artesco'
            }
        }
    }
        //Guardando los valores en una variable

        const {
            Categoria: {uno},           
            Categoria: {dos}
        } = objetoNested;

        console.log("Variable 1: ", uno);

//5. DESTRUCTURING ARRAYS
        //Declarando un array de numeros
        let arrayNumbers= [0,1,2,3,4,5];

        //Guardando los valores en alguna variable haciendo referencia al array
        const [first,second] = arrayNumbers;

        //Podemos usar el spread operator para referenciar varios valores contiguos
        const [primero,,,...all] = arrayNumbers;

//6. IMPORTANDO FUNCIONES (MODULOS)
        // //Importando funciomes y variables desde externalFunctions.js
        // import  external from "./externalFunctions.js";


        // //Importando funciones cambiando el nombre de la funcion
        // // import { multiplicar as multi } from "./externalFunctions.js";

        // console.log("Resultado de la suma: ", sumar(10,15));
        // // console.log("Resultado de la multi: ", multi(2,3,4));
        // // console.log("Nombre de la variable: ", MiNombre);

        

        


