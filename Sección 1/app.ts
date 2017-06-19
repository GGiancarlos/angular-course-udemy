let nombre: string = "Giancarlos";
let apellido: string = "Gutiérrez";
let edad: number = 25;
let texto = `Hola, ${ nombre } ${apellido} ${edad}`;


function activar (quien: string, 
                  objeto: string = "señal",
                  opcional?: string)
{
    let mensaje: string;
    if (opcional) {
        mensaje = `${quien} activó la ${objeto} en la ${opcional}`;
    } else {
        mensaje = `${quien} activó la ${objeto}`; 
    }

}

activar("Gordon");