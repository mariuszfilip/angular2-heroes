import { Component } from '@angular/core';
import {RouterModule, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Strona Główna!';

  constructor(private router:Router){}

  goToDashBoard(){
      this.router.navigate(['/dashboard']);
  }
  goToHeroes(){
    this.router.navigate(['/heroes']);
  }
}
