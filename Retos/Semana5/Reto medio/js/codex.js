let TI; //Tipo de hamburguesa
let N; // Numero de hamburguesas
let TP; //Tipo de pago
let PA; //Precio de la hamburguesa
let CA; //Cargo por el uso de la tarjeta
let TO; //Total sin cargo
let TOT; //Total con cargo
bd=true;

//USO DE UNA FUNCION DECLARATIVA
function getPrecioHam() {
    TI = prompt("Ingrese tipo de hamburguesa: ");
    switch (TI) {
        case "sencilla": case "Sencilla":
            PA= 20; break;
        case "doble": case "Doble":
            PA= 25; break;
        case "triple": case "Triple":
            PA= 28; break;
        default:
            PA=0; bd=false;
    }
    if(bd==true){
        getPago(parseInt(PA));      
    }else{
        alert("Tipo de hamburguesa invalida");
    }    
}

//EXPRESION DE FUNCION
function getPago(precioHam){
    N = parseInt(prompt("Ingrese cantidad de hamburguesas: "));
    TO = precioHam * N;
     getTotal(TO);     
}

function getTotal(pp){
    TP = prompt("Ingrese tipo de pago: [tarjeta][efectivo]");
    if(TP=="tarjeta"){
        CA = (pp*0.05);
    }else{
        CA = 0;
    }
    TOT = CA + pp;
    print();
}

function print(){
    alert("**********BOLETA DE VENTA**********"+
        "\nTipo de hamburguesa: " + TI +
        "\nCantidad           : " + N +        
        "\nPrecio x hamburg   : " + PA +
        "\nTipo de Pago       : " + TP+ 
        "\nCargo por tarjeta  : " + CA +
        "\nTotal sin cargo    : " + TO +
        "\nTotal con cargo    : " + TOT +
        "\n----------------------------------");
}





