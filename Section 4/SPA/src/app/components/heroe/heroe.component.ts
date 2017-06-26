import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from "../../services/heroes.service";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {
  heroe: any = {};
  casaDC: string = "assets/img/dc.jpg";
  casaMarvel: string = "assets/img/marvel.png";
  constructor(private activatedRoute: ActivatedRoute,
              private heroService: HeroesService) {
    this.activatedRoute.params.subscribe(params => {
      // console.log(params['id']);
      this.heroe = this.heroService.getHeroe(params['id']);
      console.log(this.heroe);
      
    });
   }

  ngOnInit() {
  }

}
