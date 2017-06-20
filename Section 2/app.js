// let nombre: string = "Giancarlos";
// let apellido: string = "Gutiérrez";
// let edad: number = 25;
// let texto = `Hola, ${ nombre } ${apellido} ${edad}`;
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
