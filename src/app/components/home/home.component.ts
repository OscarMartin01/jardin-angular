import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  public title: String;
  public subtitle: String;

  constructor(){
    this.title="Bienvenidos";
    this.subtitle="Acá encontrarás información sobre nosotros"
  }

  ngOnInit() {
    
  }
}
