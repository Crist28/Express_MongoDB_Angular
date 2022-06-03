import { Component, Input, Output, EventEmitter, OnChanges, SimpleChange, SimpleChanges, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
    selector:'stores',
    templateUrl:'./stores.component.html',
})

export class StoresComponent implements OnChanges, OnInit, DoCheck, OnDestroy{
    @Input() public nombre: String;
    @Input('metros_cuadrados') public metros: Number;
    public vegetacion: String;
    public abierto: boolean;

    @Output() pasamelosDatos = new EventEmitter();

    constructor(){
        this.nombre = 'Parque natural para caballos'; 
        this.metros = 450;
        this.vegetacion = 'Alta;'
        this.abierto = false;
    }

    //////////////Se ejecuta cuando cambiamos valores////////////////////////////////////////
    ngOnChanges(changes: SimpleChanges){
        console.log(changes);
        console.log("Existen cambios en las propiedades")
    }
    /////////////////Se ejecuta una vez por componente//////////////////////////////////////
    ngOnInit(){
        console.log('Metodo on init lanzado');
        
    }
    ////////////////Su ciclo de vida es : se ejecuta despues de una accion//////////////////
    ngDoCheck(){
        
    }

    /////////////Se ejecuta una vez de finalizar el programa//////////////////////////////////////7
    ngOnDestroy(){
        console.log('Se ha eliminado el componente');
        
    }

    emitirEvento(){
        this.pasamelosDatos.emit({
            'nombre': this.nombre,
            'metros': this.metros,
            'vegetacion': this.vegetacion,
            'abierto': this.abierto
        })
    }

}