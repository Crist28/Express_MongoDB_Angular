import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { GLOBAL } from '../../services/global';
import { UserService } from "src/app/services/user.service"; 
import { uploadService } from "src/app/services/upload.service";

@Component({
    selector: 'user-edit',
    templateUrl: './user-edit.component.html',
    styleUrls: ['./user-edit.component.css'], 
    providers: [UserService, uploadService] 
})

export class userEditComponent implements OnInit {
    public title: string;
    public user: User;
    public identity;
    public token;
    public status:any;
    public url:string;

    constructor
    (
        private _userService: UserService,
        private _uploadUpdate: uploadService
    )
    {
        this.title = 'Actualizar mis datos';
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.user = this.identity;
        this.url = GLOBAL.url;
    }
    ngOnInit(){
        console.log('user-edit = componente cargado!!');
        
    }
    
    onSubmit(){
        this._userService.updateUser({user: this.user}).subscribe(
            response =>{
                if(!this.user){
                    this.status = 'error';
                }else{
                    this.status = 'success'
                    localStorage.setItem('identity', JSON.stringify(this.user));
                    //Subida de la imagen
                    this._uploadUpdate.makeFileRequest(this.url+'upload-image-user/'+this.user._id, [],
                     this.filesToUpload, this.token, 'image').then((result: any)=>{
                        this.user.image = result.image;
                        localStorage.setItem('identity', JSON.stringify(this.user));
                        console.log(this.user);
                    });
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