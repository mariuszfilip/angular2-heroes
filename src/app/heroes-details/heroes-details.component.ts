import { Component, OnInit, Input } from '@angular/core';
import {Hero} from '../dashboard/hero';

@Component({
  selector: 'app-heroes-details',
  templateUrl: './heroes-details.component.html',
  styleUrls: ['./heroes-details.component.css']
})
export class HeroesDetailsComponent implements OnInit {

  @Input()
  private selectedHero:Hero;

  constructor() { }

  ngOnInit() {
  }

}
