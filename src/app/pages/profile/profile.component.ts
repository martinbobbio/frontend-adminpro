import { Component, OnInit } from "@angular/core";
import { UserService, UploadFileService } from "../../services/service.index";
import { User } from "../../models/user.model";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styles: []
})
export class ProfileComponent implements OnInit {
  user: User;
  imageUpload: File;
  imageTemporal: string;

  constructor(
    public _userService: UserService,
    public _uploadFileService: UploadFileService
  ) {}

  ngOnInit() {
    this.user = this._userService.user;
  }

  saveProfile(user: User) {
    if (!this.user.google) {
      this.user.name = user.name;
      this.user.email = user.email;
      this._userService.updateUser(this.user).subscribe();
    } else {
      swal("User google not changes", "Warning", "info");
    }
  }

  selectImage(file) {
    if (!file) {
      this.imageUpload = null;
      return;
    }

    if(file.type.indexOf('image') < 0){
      swal('Only Images', 'The file must be an image', 'error');
      this.imageUpload = null;
      return;
    }

    this.imageUpload = file;

    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = ()=>{
      this.imageTemporal = reader.result.toString();
    }
  }

  updateImage(){
    this._userService.updateImage(this.imageUpload, this.user._id);
  }

}
