import { Injectable } from "@angular/core";
import { User } from "../../models/user.model";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Router } from "@angular/router";
import { UploadFileService } from "../upload-file/upload-file.service";
import swal from "sweetalert";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { Observable } from "rxjs/Observable";

@Injectable()
export class UserService {
  user: User;
  token: string;
  menu:any = [];

  constructor(
    public http: HttpClient,
    public router: Router,
    public _uploadFileService: UploadFileService
  ) {
    this.loadStorage();
  }

  saveStorage(id: string, token: string, user: User, menu:any) {
    localStorage.setItem("id", id);
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("menu", JSON.stringify(menu));

    this.user = user;
    this.token = token;
    this.menu = menu;
  }

  loadStorage() {
    if (localStorage.getItem("token")) {
      this.token = localStorage.getItem("token");
      this.user = JSON.parse(localStorage.getItem("user"));
      this.menu = JSON.parse(localStorage.getItem("menu"));
    } else {
      this.token = "";
      this.user = null;
      this.menu = [];
    }
  }

  loginGoogle(token: string) {
    let url = `${environment.backend}/login/google`;

    return this.http.post(url, { token }).map((response: any) => {
      this.saveStorage(response.id, response.token, response.user, response.menu);
      return true;
    });
  }

  login(user: User, remember: boolean = false) {
    if (remember) localStorage.setItem("email", user.email);
    else localStorage.removeItem("email");

    let url = `${environment.backend}/login`;

    return this.http.post(url, user).map((response: any) => {
      this.saveStorage(response.id, response.token, response.user, response.menu);

      return true;
    }).catch(err =>{
      swal("Error - Login", err.error.message, "error")
      return Observable.throw(err);
    });
  }

  createUser(user: User) {
    let url = `${environment.backend}/user`;

    return this.http.post(url, user).map((response: any) => {
      swal("User created", user.email, "success");
      return response.user;
    }).catch(err =>{
      swal(err.error.message, err.error.errors.message,"error")
      return Observable.throw(err);
    });
  }

  isLogued() {
    return this.token.length > 5 ? true : false;
  }

  logout() {
    this.user = null;
    this.token = "";
    this.menu = [];

    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("menu");

    this.router.navigate(["/login"]);
  }

  updateUser(user: User) {
    let url = `${environment.backend}/user/${user._id}?token=${this.token}`;

    return this.http.put(url, user).map((response: any) => {
      if(user._id === this.user._id){
        this.saveStorage(response.user._id, this.token, response.user, this.menu);
      }
      swal("User update", user.name, "success");
      
      return true;
    }).catch(err =>{
      swal(err.error.message, err.error.errors.message,"error")
      return Observable.throw(err);
    });
  }

  updateImage(file: File, id: string) {
    this._uploadFileService
      .uploadFile(file, "user", id)
      .then((response: any) => {
        this.user.img = response.user.img;
        swal("Image uploaded", this.user.name, "success");
        this.saveStorage(id, this.token, this.user, this.menu);
      })
      .catch(err => {
        console.error(err);
      });
  }

  loadUsers(since: number = 0) {
    let url = `${environment.backend}/user/?since=${since}`;
    return this.http.get(url);
  }

  searchUsers(term: string) {
    let url = `${environment.backend}/search/collection/users/${term}`;
    return this.http.get(url).map((response:any) => response.users);
  }

  deleteUser(id:string){
    let url = `${environment.backend}/user/${id}?token=${this.token}`;
    return this.http.delete(url).map(response => {
      swal('User deleted','the user has been deleted correctly','success');
      return true;
    })
  }
}
