import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { GLOBAL } from '../../services/global';
import { UserService } from "src/app/services/user.service"; 
import { state } from '@angular/animations';

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
    providers: [UserService]
})


export class RegisterComponent implements OnInit{
    public title: any;
    public user: User;
    public status: string | any;    


    constructor
    (
        private _route: ActivatedRoute, 
        private _router: Router, 
        private _userService: UserService
    )
    {
        this.title = 'Registro';
        this.user = new User('','','','','','ROLE_USER','');
    }

    ngOnInit(){
        console.log('register.component cargado');
        
    }
    onSubmit(registerForm: { reset: () => void; }){
        this._userService.register({ user: this.user }).subscribe(
            response=>{
                console.log(response);
                if(response.user && response.user._id){
                    this.status = 'success';
                    this.user = new User('','','','','','ROLE_USER','');
                    registerForm.reset();
                }else{
                    this.status = 'error';
                }
            },
            error =>{
                console.log(<any>error);
            }
        )        
    }
} 
