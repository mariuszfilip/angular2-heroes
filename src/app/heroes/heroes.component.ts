import { Component, OnInit } from '@angular/core';
import {HeroesService} from '../dashboard/heroes.service'
import {Hero} from '../dashboard/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers:[HeroesService]
})
export class HeroesComponent implements OnInit {

  private heroes:Hero[];
  constructor(private heroesService:HeroesService) { }

  ngOnInit() {
    this.heroesService.getHeroes().then(heroes=>this.heroes = heroes.slice(0,3));
  }

}
