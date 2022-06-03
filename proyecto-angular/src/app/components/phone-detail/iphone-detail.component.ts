import { Component, DoCheck, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GLOBAL } from '../../services/global';
import { PhoneService } from '../../services/phone.service'; 
import { Phone } from '../../models/phone'; 

@Component({
  selector: 'phone-detail',
  templateUrl: './iphone-detail.component.html',
  styleUrls: ['./iphone-detail.componenr.css'],
  providers: [PhoneService]
})
export class PhoneDetailComponent implements OnInit{    
  public phone: Phone;
  public url: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,    
    private _phoneService: PhoneService
  ){
       this.url = GLOBAL.url;
  }

  ngOnInit(): void {
      console.log('phone-detail component cargado...');
      this.getPhone();
  }

  getPhone(){
      this._route.params.forEach((params: Params) =>{
        let id = params['id'];

        this._phoneService.getPhone(id).subscribe(
            response => {
            
            console.table(response.telefono)
            this.phone = response.telefono;
            },
            error => {
                this._router.navigate(['/home']);
                console.log(<any>error);
            }
        );
      });
  }
}