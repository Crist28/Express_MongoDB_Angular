import { Component, OnInit } from '@angular/core';
import { Phone } from 'src/app/models/phone'; 
import { PhoneService } from 'src/app/services/phone.service'; 
import { GLOBAL } from '../../services/global';
import { fundido } from '../animation';

@Component({
  selector: 'phones',
  templateUrl: './phones.component.html',
  styleUrls:['./phones.component.css'],
  providers: [PhoneService],
  animations: [fundido]
})
export class PhonesComponent implements OnInit {
  public title: string;
  public phones: Phone[];
  public url;

  constructor(
    private _phonesService: PhoneService
  ){
    this.title = "telefonos";
    this.url = GLOBAL.url;
  }

  ngOnInit(){
    console.log("phones.component cargado !!");
    this.getPhones();
    }

    getPhones(){
      this._phonesService.getPhones().subscribe(
        response => {
         
          console.table(response.message)
            this.phones = response.message;
        },
        error => {
           console.log(<any>error);
        }
      );
    }
}