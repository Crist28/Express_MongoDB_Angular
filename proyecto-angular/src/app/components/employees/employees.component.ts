import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { GLOBAL } from '../../services/global';

import { fundido } from '../animation';

@Component({
  selector: 'employees',
  templateUrl: './employees.component.html',
  providers: [UserService],
  animations: [fundido]
})
export class EmployeesComponent implements OnInit {
  public title: string;
  public empleados: User[];
  public url;

  constructor(
    private _userService: UserService
  ){
    this.title = 'Empleados';
    this.url = GLOBAL.url;
  }

  ngOnInit(){
    console.log("empleados.component cargado !!");
    this.getEmployees();
  }

  getEmployees(){
    this._userService.getEmployees().subscribe(
      response => {
       
        console.table(response.users)
          this.empleados = response.users;
      },
      error => {
         console.log(<any>error);
      }
    );
  }
}
