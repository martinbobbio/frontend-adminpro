import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../services/user/user.service';

@Injectable()
export class VerifyTokenGuard implements CanActivate {

  constructor(public _userService:UserService, public router:Router){}

  canActivate(): Promise<boolean> | boolean{
    
    let token = this._userService.token;
    let payload = JSON.parse(atob(token.split('.')[1]));

    let expire = this.expire(payload.exp);

    if (expire){
      this.router.navigate(['/login']);
      return false;
    }

    return this.verifyNewToken(payload.exp);

  }

  verifyNewToken(dateExp:number): Promise<boolean>{
    return new Promise((resolve, reject) =>{
      let tokenExp = new Date(dateExp*1000);
      let now = new Date();
      now.setTime(now.getTime() + (1*60*60*1000));

      if(tokenExp.getTime() > now.getTime()) resolve(true)
      else{
        this._userService.refreshToken().subscribe(() => {
          resolve(true);
        }, () => {
          reject(false);
        })
      }

      resolve(true);
    });
  }

  expire(dateExp: number){
    let now = new Date().getTime() / 1000;
    if(dateExp < now) return true;
    else return false;
  }
}
