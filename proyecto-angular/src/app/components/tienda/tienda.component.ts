import { Component, Input } from "@angular/core";
declare let jQuery:any;
declare let $:any;

@Component({
    selector:'tienda',
    templateUrl:'./tienda.component.html',
    styleUrls:['./tienda.component.css']
})

export class TiendaComponent{
    @Input() public titulo;
    @Input() public nombreDelParque: string; 
    @Input() public miParque: any;

    constructor(){
        this.titulo = 'Esta es la tienda';
        this.nombreDelParque = "";
    }
    mostrarNombre(){
        console.log(this.nombreDelParque);
    }

    verDatosParque(event: any){
        console.log(typeof event, event);
        this.miParque = event;
        
    }

}