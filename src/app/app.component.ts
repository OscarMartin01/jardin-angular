import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jardin';
  year: number;

  constructor(){
    this.year= new Date().getFullYear();
  }

  casillaVerificacion: boolean = false;
  deshabilitada: boolean = false;
  menuMovido: boolean = false;

  moverMenu() {
    this.menuMovido = !this.menuMovido;
  }

  manejarClic(){
    this.menuMovido = !this.menuMovido;
  }
}

