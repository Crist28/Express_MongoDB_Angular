import { Component, DoCheck, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from './services/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ UserService ]
})
export class AppComponent implements OnInit, DoCheck{
  public title;
  public identity: any;
  public token: any;
  public url: string;

  constructor
  (
    private _route: ActivatedRoute, 
    private _router: Router, 
    private _userService: UserService 
  )
  {
    this.title = 'iPhone - Apple (CO)';
    this.url = GLOBAL.url;
  }

  ngOnInit(){
      this.identity = this._userService.getIdentity();
  }
  
  ngDoCheck(){
    this.identity = this._userService.getIdentity();
  }

  logout(){
    localStorage.clear();
    this.identity = null;
    this._router.navigate(['/']);
  }
}
