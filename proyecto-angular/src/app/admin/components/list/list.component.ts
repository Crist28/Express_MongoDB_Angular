import { Component,  OnInit } from '@angular/core';
import { Phone } from 'src/app/models/phone';
import { PhoneService } from 'src/app/services/phone.service';
import { UserService } from 'src/app/services/user.service';
import { uploadService } from 'src/app/services/upload.service';
import { fadeLateral } from '../../animacion';

@Component({
  selector: 'admin-list',
  templateUrl: './list.component.html', 
  providers: [UserService,PhoneService,uploadService],
  animations:[ fadeLateral ]  

})
export class ListComponent implements OnInit{
  public title: string;
  public numbers = new Array(10);
  public phones: Phone[];
  public token;
  public busqueda:any;

  constructor
  (

    private _phoneService: PhoneService,
    private _userService: UserService,
  )
  {
    this.title = 'Listado';
    this.token = this._userService.getToken();
  }

  /*ngOnInit(){
    this._phoneService.getPhones().subscribe(
    response=>{
      if(!this.phones){
        this
      }else{
        this.phones = this.phones
      }
    },
    error=>{
      console.log(<any>error);
      
    }
    );
  }*/
  ngOnInit(){
    this.getPhones();
  }

  getPhones(){
    this._phoneService.getPhones().subscribe(
      response => {
        if(!this.phones){
          console.table(response.message)
          this.phones = response.message;  
        }else{
          this.phones = this.phones
        }
      },
      error => {
         console.log(<any>error);
      }
    );
  }

  deletePhone(id: any){ 
    this._phoneService.deletePhone({token:this.token, id}).subscribe(
      response => {
        if(!this.phones){
          alert('Error en el servidor');
        }
        this.getPhones();
      },
      error => {
        alert('Error en el servidor');
      }
    );
  }
  refresh(): void { 
    window.location.reload(); 
  }

}