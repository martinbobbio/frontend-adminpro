import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { UserService } from "../services/service.index";
import { User } from "../models/user.model";
import { environment } from "../../environments/environment.prod";
import { Title } from "@angular/platform-browser";

declare function initPlugins();
declare const gapi: any;

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  email: string;
  remember: boolean = false;
  auth2: any;

  constructor(public router: Router, public _userService: UserService, public titlePage:Title) {}

  ngOnInit() {
    initPlugins();
    this.googleInit();

    this.titlePage.setTitle(`${environment.name} - Login`);

    this.email = localStorage.getItem("email") || "";
    if (this.email.length > 1) {
      this.remember = true;
    }
  }

  login(form: NgForm) {
    if (form.invalid) return;

    let user = new User(null, form.value.email, form.value.password);

    this._userService
      .login(user, form.value.remember)
      .subscribe(response => this.router.navigate(["/dashboard"]));
  }

  googleInit() {
    gapi.load("auth2", () => {
      this.auth2 = gapi.auth2.init({
        client_id: environment.googleId,
        cookiepolicy: "single_host_origin",
        scope: "profile email"
      });
      this.attachSignin(document.getElementById("btn-google"))
    });
  }

  attachSignin(element) {
    this.auth2.attachClickHandler(element, {}, googleUser => {
      let token = googleUser.getAuthResponse().id_token;

      this._userService.loginGoogle(token).subscribe(() => {
        window.location.href = '#/dashboard'
      })
    });
  }
}
