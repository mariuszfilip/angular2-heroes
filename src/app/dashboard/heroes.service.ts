/**
 * Created by mariusz on 01.03.17.
 */
import {Injectable} from '@angular/core'
import {Hero, HEROES} from "./dashboard.component";


@Injectable()
export class HeroesService {
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }
}

