// let nombre: string = "Giancarlos";
// let apellido: string = "Gutiérrez";
// let edad: number = 25;
// let texto = `Hola, ${ nombre } ${apellido} ${edad}`;
// //Funciones: Parámetros opcionales, obligarios y por defecto
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
// //Funciones por Flecha
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
//Destructuración de Objetos y Arreglos
var avenger = {
    nombre: "Steve",
    clave: "Capitan America",
    poder: "Droga"
};
// let nombre = avenger.nombre;
// let clave = avenger.clave;
// let poder = avenger.poder;
var nombre = avenger.nombre, clave = avenger.clave, poder = avenger.poder; //destructuracion
console.log(nombre, clave, poder);
var avengers = ["Thor", "Steve", "Tony"];
var thor = avengers[0], capi = avengers[1], ironman = avengers[2];
console.log(thor, capi, ironman);
