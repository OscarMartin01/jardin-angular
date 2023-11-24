import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private router: Router) {}

  navegarAOtraRuta() {
    this.router.navigate(['/inicio']);

    Swal.fire({
      icon: 'success',
      title: 'Formulario enviado satisfactoriamente',
      
      customClass: {
        title: 'swal2title',
        
      }
    })
  }

}
