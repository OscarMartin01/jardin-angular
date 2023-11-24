import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
public subtitle: string

constructor(){
  this.subtitle="Acá encontrarás nuestros servicios como lo son:"
}
}
