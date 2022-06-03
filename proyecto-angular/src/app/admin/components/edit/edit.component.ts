import { Component, DoCheck, OnInit, OnChanges } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GLOBAL } from '../../../services/global';
import { PhoneService } from 'src/app/services/phone.service'; 
import { UserService } from '../../../services/user.service';
import { uploadService } from '../../../services/upload.service';
import { Phone } from 'src/app/models/phone'; 

@Component({
  selector: 'administrador-editar',
  templateUrl: '../add/add.component.html',
  providers: [UserService, PhoneService, uploadService]
})
export class EditComponent implements OnInit{
  public title = 'Agregar';  
  public phone: Phone;
  public identity;
  public token;
  public url: string;
  public status: any;
  public is_editar;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userServices: UserService,
    private _phoneService: PhoneService,
    private _uploadService: uploadService,
  ){
    this.is_editar = true;
    this.title = 'Editar';
    this.phone = new Phone('','','', 2022, '', '');
    this.identity = this._userServices.getIdentity();
    this.token = this._userServices.getToken();
    this.url = GLOBAL.url; 
  }

  ngOnInit(): void {
    console.log('phone-add componente ha sido cargado !!');
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

  onSubmit(){
    let id = this.phone._id;
    this._phoneService.editarPhone({token: this.token, id, phone: this.phone}).subscribe(
      response => {
        if(!this.phone){
          this.status = 'error';
        }else{
          this.status = 'success';
          this.phone = this.phone;

          //Subir la imagen del carro
          if(!this.filesToUpload){
            this._router.navigate(['/phone', this.phone._id]);
          }else{
            //Subida de la imagen             
            this._uploadService.makeFileRequest(this.url+'upload-image-phone/'+this.phone._id, [], this.filesToUpload, this.token, 'image')
             .then((result: any) =>{
                this.phone.image = result.image;  

                this._router.navigate(['/phone', this.phone._id]);
            });
          }
        }
      },
      error =>{
        let errorMessage = <any>error;

        if(errorMessage != null){
            this.status = 'error';
        }
      }
    );
  }

  public filesToUpload: Array<File> | any;
  fileChangeEvent(fileInput: any){
      this.filesToUpload = <Array<File>>fileInput.target.files;
      console.log(this.filesToUpload);
  }
}