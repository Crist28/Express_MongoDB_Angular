import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'show-email',
  template: `
    <h2>{{ title }}</h2>
    <span *ngIf="emailContacto">
      <strong>Email de Contacto : </strong>{{ emailContacto }}
      <button (click)="borrarEmail()">Eliminar</button>
    </span>
  `,
})
export class ShowEmailComponent implements DoCheck, OnInit {
  title = 'Mostrar correo';
  emailContacto: any;

  ngOnInit() {
    this.emailContacto = localStorage.getItem('emailContacto');
  }
  ////////////////Su ciclo de vida es : se ejecuta despues de una accion//////////////////
  ngDoCheck() {
    this.emailContacto = localStorage.getItem('emailContacto');
  }
  borrarEmail() {
    localStorage.removeItem('emailContacto');
    localStorage.clear();
    this.emailContacto = null;
  }
}
