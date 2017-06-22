import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent  { 
  mostrar: boolean = true;
  texto: string = "Un gran poder, requiere un agran responsabilibdad.";
  autor: string = "Ben Parker";

  personajes: string[] = ["Spiderman", "Venom", "Dr. Octopus"];
}
