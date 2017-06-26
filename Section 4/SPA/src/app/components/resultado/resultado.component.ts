import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from "../../services/heroes.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html'
})
export class ResultadoComponent implements OnInit {
  heroes: Heroe[] = [];
  termino: string;

  constructor(private heroesService: HeroesService,
              private activatedRouter: ActivatedRoute) {
    
  }

  ngOnInit() {
      this.activatedRouter.params.subscribe(params => {
        this.termino = params['termino'];
        this.heroes = this.heroesService.buscarHeroes(params['termino']);        
        console.log(this.heroes);
        
      })
  }

}
