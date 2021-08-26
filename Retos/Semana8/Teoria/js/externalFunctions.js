//SE EXPORTA UNA FUNCION CON LA PALABRA RESERVADA EXPORT

export function sumar(a,b){
    return a + b;
}

export function multiplicar (a,b,c){
    return a * b * c;
}

//Se pueden exportar variuables o constantes
export const MiNombre = "Pancho Pistolas";

//Se Pueden exportar funciones default
export default function external(){
    console.log("Hola soy function external!");
}

