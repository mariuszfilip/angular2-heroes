import {Component, OnInit} from '@angular/core';
import {HeroesService} from './heroes.service'
import {Hero} from './hero';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    providers: [HeroesService]

})

export class DashboardComponent implements OnInit {
    selectedHero: Hero;
    heroes: Hero[];

    constructor(private heroesService: HeroesService) {
    }

    ngOnInit(): void {
        this.heroesService.getHeroes().then(heroes => this.heroes = heroes);
    }

    onSelect(selectedHeroForm: Hero): void {
        this.selectedHero = selectedHeroForm;
    }
}

export const HEROES: Hero[] = [
    {id: 11, name: 'Mr. Nice'},
    {id: 12, name: 'Narco'},
    {id: 13, name: 'Bombasto'},
    {id: 14, name: 'Celeritas'},
    {id: 15, name: 'Magneta'},
    {id: 16, name: 'RubberMan'},
    {id: 17, name: 'Dynama'},
    {id: 18, name: 'Dr IQ'},
    {id: 19, name: 'Magma'},
    {id: 20, name: 'Tornado'}
];