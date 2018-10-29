import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../services/user/user.service';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(public _userService:UserService, public router:Router){}

  canActivate(){

    if(this._userService.isLogued()) return true;
    else this.router.navigate(['/login']);

  }
}
