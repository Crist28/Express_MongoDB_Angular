import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'main-email',
  template: `
        <h1>{{title}}</h1>
        <show-email></show-email>
        <save-email></save-email>
  `
})
export class MainEmailComponent implements OnInit{
  title = 'Modulos de correos';
  
  ngOnInit(){
      console.log('Componente principal cargado');
      
  }

}
