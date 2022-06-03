import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { GLOBAL } from '../../services/global';
import { UserService } from 'src/app/services/user.service';
import { state } from '@angular/animations';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService],
})
export class LoginComponent implements OnInit {
  public title: string;
  public user: User;
  public identity: any;
  public token: any;
  public status: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ) {
    this.title = 'Identificate';
    this.user = new User('', '', '', '', '', 'ROLE_USER', '');
  }
  ngOnInit() {
    console.log('login.component cargado');
  }

  //Loguear al usuario y conseguir sus datos
  onSubmit() {
    //primero conseguimos el usuario
    this._userService.singup({ user: this.user }).subscribe(
      (response) => {
        //  this.token = response['token'];
        this.identity = response.user;

        if (!this.identity || !this.identity._id) {
          this.status = 'error';
          alert('El usuario no se ha logueado correctamente');
        } else {
          this.identity.password = '';

          localStorage.setItem('identity', JSON.stringify(this.identity));
          //mostramos el token
          /**
           * Identity tiene la contraseña cifrada, si metemos identity
           * el backend nos arrojaría un error, es user quien aun tiene la contraseña plana
           **/
          this._userService.singup({ user: this.user, gettoken: 'true' }).subscribe(
            (response) => {
              //this.token = response['token'];
              this.token = response.token;

              if (this.token.length <= 0) {
                alert('El token no se ha generado');
              } else {
                //mostramos el token
                localStorage.setItem('token', this.token);

                this.status = 'success';
              }

              //  console.log(this.token);
            },

            (error) => {
              this.status = 'error';
              console.log(<any>error);
            }
            //  console.log(this.token);
          );
        }
      },

      (error) => {
        this.status = 'error';
        console.log(<any>error);
      }
    );
  }
}
