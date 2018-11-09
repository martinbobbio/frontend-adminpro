import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserService } from "../services/service.index";
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import swal from 'sweetalert'; 
import { Title } from "@angular/platform-browser";
import { environment } from "../../environments/environment";
declare function initPlugins();

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./login.component.css"]
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(public _userService:UserService, public router:Router, public titlePage:Title) {
    initPlugins();

    this.titlePage.setTitle(`${environment.name} - Register`);

    this.form = new FormGroup(
      {
        name: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, Validators.required),
        password2: new FormControl(null, Validators.required),
        conditions: new FormControl(false)
      },
      { validators: this.areEquals("password", "password2") }
    );
  }

  ngOnInit() {}

  areEquals(field1: string, field2: string) {
    return (group: FormGroup) => {
      let pass1 = group.controls[field1].value;
      let pass2 = group.controls[field2].value;

      if (pass1 === pass2) return null;

      return { areEquals: true };
    };
  }

  registerUser() {
    if (this.form.invalid) return;

    if (!this.form.value.conditions) {
      swal("Important", "You must agree to terms and conditions","info");
      return;
    }

    let user = new User(this.form.value.name,this.form.value.email,this.form.value.password);

    this._userService.createUser(user).subscribe((response) => this.router.navigate(['/login']));

  }

  openTerms(){
    swal({
      title: "Terms and conditions",
      text: "The following terms and conditions (the Terms and Conditions) govern your use of this website and any of the content available through or through this website, including any content derived from it (the Website). Time Inc. (Time Inc. or us) has placed the Website at your disposal. We may change the Terms and Conditions from time to time, at any time without notice, only posting changes to the Website. BY USING THE WEB SITE, YOU ACCEPT AND AGREE TO THESE TERMS AND CONDITIONS REGARDING YOUR USE OF THE WEBSITE. If you do not agree with these Terms and Conditions, you can not access it or use the Website in any other way.",
    });
  }
}
