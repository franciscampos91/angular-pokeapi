import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
    <h1>Aula de Services</h1>
    <app-card></app-card>
    <router-outlet></router-outlet>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rotas';
}
