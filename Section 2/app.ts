// let nombre: string = "Giancarlos";
// let apellido: string = "Gutiérrez";
// let edad: number = 25;
// let texto = `Hola, ${ nombre } ${apellido} ${edad}`;

/**
 * Funciones: Parámetros opcionales, obligarios y por defecto
 */

// function activar (quien: string, 
//                   objeto: string = "señal",
//                   opcional?: string)
// {
//     let mensaje: string;
//     if (opcional) {
//         mensaje = `${quien} activó la ${objeto} en la ${opcional}`;
//     } else {
//         mensaje = `${quien} activó la ${objeto}`; 
//     }

// }

// activar("Gordon");


/**
 * Funciones por Flecha
 */

// let miFuncion = function (a){
//     return a;
// };

// let miFuncionF = a => a;

// console.log(miFuncion("Normal"));
// console.log(miFuncionF("Flecha"));

// let miFuncion2 = function(a: number, b: number){
//     return a + b;
// }

// let miFuncion2F = (a: number, b: number) => a + b;

// let miFuncion3 = function(nombre: string){
//     return nombre.toUpperCase();
// }

// let miFuncion3F = (nombre: string) => nombre.toUpperCase();

// let nombre: string = "Pedro";

// let hulk = {
//     nombre: "Hulk",
//     smash(){
//         setTimeout( () => console.log(this.nombre + " smash!!"), 1500); //el this solo hace referencia al objeto
//     }
// }

// hulk.smash();

/**
 * Destructuración de Objetos y Arreglos
 */

// let avenger = {
//     nombre: "Steve",
//     clave: "Capitan America",
//     poder: "Droga"
// }

// // let nombre = avenger.nombre;
// // let clave = avenger.clave;
// // let poder = avenger.poder;

// let { nombre, clave, poder} = avenger; //destructuracion

// console.log(nombre, clave, poder);

// let avengers: string[] = ["Thor", "Steve", "Tony"];

// let [ thor, capi, ironman] = avengers;

// console.log(thor, capi, ironman);

/**
 * Promesas en ES6
 */

// let promise1 = new Promise( function(resolve, reject){
//     setTimeout( () => {
//         console.log("Promesa terminada");
//         // Termina bien
//         //resolve();

//         // Termina mal
//         reject();
//     }, 1500);    
// })

// console.log("Paso 1");

// promise1.then(function () {
//     console.log("Ejecutarme cuando termine bien");
// }, function () {
//     console.error("Ejecutar si algo sale mal");
// })

// console.log("Paso 2");

/**
 * Interfaces de Typescript
 */
// interface Xmen{
//     nombre: string,
//     poder: string
// }
// // Podria definirse 
// // function enviar(xmen:{nombreXmen: string}) {
// //     console.log("Enviar :" + xmen.nombreXmen);
// // }

// function enviarMision(xmen: Xmen) {
//     console.log("Enviando de mision a: " + xmen.nombre);   
// }

// function enviarCuartel(xmen: Xmen) {
//     console.log("Enviando al cuartel a: " + xmen.nombre);   
// }

// let wolverine: Xmen = {
//     nombre: "Wolverine",
//     poder: "Regeneracion"
// };

// // enviar(wolverine); // Error al no coincidir los atributos nombre - nombreXmen
// enviarMision(wolverine);
// enviarCuartel(wolverine);


/**
 * Clases en Typescript
 */

class Avenger {
    nombre: string = "Sin Nombre";
    equipo: string;
    nombreReal: string;

    puedePelear: boolean = false;
    peleasGanadas: number = 0;

    constructor(nombre: string, equipo: string, nombreReal: string){
        console.log("Se ejecuto el constructor");
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
}

let antman: Avenger = new Avenger("Antman", "cap", "Scott Lang");

console.log(antman);

