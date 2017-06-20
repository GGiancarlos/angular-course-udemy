// let nombre: string = "Giancarlos";
// let apellido: string = "Gutiérrez";
// let edad: number = 25;
// let texto = `Hola, ${ nombre } ${apellido} ${edad}`;
// Podria definirse 
// function enviar(xmen:{nombreXmen: string}) {
//     console.log("Enviar :" + xmen.nombreXmen);
// }
function enviarMision(xmen) {
    console.log("Enviando de mision a: " + xmen.nombre);
}
function enviarCuartel(xmen) {
    console.log("Enviando al cuartel a: " + xmen.nombre);
}
var wolverine = {
    nombre: "Wolverine",
    poder: "Regeneracion"
};
enviarMision(wolverine);
enviarCuartel(wolverine);
// enviar(wolverine); // Error al no coincidir los atributos nombre - nombreXmen 
