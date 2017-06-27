import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasenha'
})
export class ContrasenhaPipe implements PipeTransform {

  transform(value: string, mostrar: boolean = true): any {
    // // My solution
    if (mostrar) {
      let nombre = value.split('');

      for (let i in nombre) {
        nombre[i] = "*";
      }
      return nombre.join('');

    } else {
      return value;
    }

    // Teacher solution
    // if (mostrar) {
    //   let salida: string = "";
    //   for (let i = 0; i < value.length; i++) {
    //     salida += "*";
    //   }
    //   return salida;
    // } else {
    //   return value;
    // }
  }
}
