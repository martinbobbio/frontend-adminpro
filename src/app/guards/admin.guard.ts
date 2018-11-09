import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../services/user/user.service';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(public _userService:UserService, public router:Router){}

  canActivate(){

    if(this._userService.user.role === 'ADMIN_ROLE') return true;
    else{
      this._userService.logout();
      return false;
    }
  }
}
