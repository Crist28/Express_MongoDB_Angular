import { Component, DoCheck, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { GLOBAL } from 'src/app/services/global';
import { Phone } from 'src/app/models/phone';
import { PhoneService } from 'src/app/services/phone.service';
import { UserService } from 'src/app/services/user.service';
import { uploadService } from 'src/app/services/upload.service';
import { fadeLateral } from '../../animacion';


@Component({
  selector: 'admin-edit',
  templateUrl: './add.component.html', 
  providers: [UserService,PhoneService,uploadService],
  animations:[ fadeLateral ]  

})
export class AddComponent implements OnInit{
  public title = 'Añadir';
  public phone: Phone;
  public identity;
  public token;
  public url: string;
  public status: any;

  constructor
  (
    private _route: ActivatedRoute,
    private _router: Router, 
    private _userService: UserService,
    private _phoneService: PhoneService,
    private _uploadUpdate: uploadService

  ){
    this.title = 'Añadir';
    this.phone = new Phone('','','',2022,'','');
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = GLOBAL.url;
  }

  ngOnInit(){
      console.log('el celular ha sido cargado');
      
  }
  onSubmit():void{
    this._phoneService.addPhone({phone: this.phone, token: this.token}).subscribe(
      response =>{
          if(!this.phone){
              this.status = 'error';
          }else{
              this.status = 'success'
              this.phone = this.phone
              //Subida de la imagen
              if(!this.filesToUpload){
                this._router.navigate(['/admin-panel/listado']);
              }else{
                this._uploadUpdate.makeFileRequest(this.url+'upload-image-phone/:id'+this.phone._id, [],
                 this.filesToUpload, this.token, 'image').then((result: any)=>{
                  this.phone.image = result.image;
                  console.log(this.phone);
                  this._router.navigate(['/admin-panel/listado']);
              });
              }     
          }
      },
      error=>{
          let errorMessage = <any>error;
          if(errorMessage != null){
              this.status = 'error';
          }
      }
  );
}

  public filesToUpload: Array<File> | any;
  fileChangeEvent(fileInput:any){
      this.filesToUpload = <Array<File>>fileInput.target.files;
  }
    
}