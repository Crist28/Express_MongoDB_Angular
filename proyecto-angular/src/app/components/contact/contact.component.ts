import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls:['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  title = 'Contacto';
  emailContacto: any;

  ////////////////Su ciclo de vida es : se ejecuta despues de una accion//////////////////
  ngOnInit(){
      console.log('Contact.component cargado !!');
      
  }
  guardarEmail(){
    localStorage.setItem('emailContacto', this.emailContacto);
  
  }
}
