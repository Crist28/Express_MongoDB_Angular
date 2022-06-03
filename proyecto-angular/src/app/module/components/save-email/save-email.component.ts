import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'save-email',
  template: `
      <h2>{{title}}</h2>
      <input type="text" [(ngModel)]="emailContacto" />
      <button (click)="guardarEmail()">Guardar</button>
  `
})
export class SaveEmailComponent{
  title = 'Guardar correo';
  emailContacto: any;

  guardarEmail() {
    localStorage.setItem('emailContacto', this.emailContacto);
  }
}
