import { Component, OnInit } from "@angular/core";
import { User } from "../../models/user.model";
import { UserService } from "../../services/user/user.service";
import { ModalUploadService } from "../../components/modal-upload/modal-upload.service";

declare var swal: any;

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styles: []
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  since: number = 0;
  totalUsers: number = 0;
  loading: boolean = true;

  constructor(public _userService: UserService, public _modalUploadService:ModalUploadService) {}

  ngOnInit() {
    this.loadUsers();

    this._modalUploadService.notification.subscribe((response) => {
      this.loadUsers();
    });
  }

  loadUsers() {
    this._userService.loadUsers(this.since).subscribe((response: any) => {
      this.totalUsers = response.total;
      this.users = response.users;
      this.loading = false;
    });
  }

  changeSince(sinceAux: number) {
    let since = this.since + sinceAux;

    if (since >= this.totalUsers) return;
    if (since < 0) return;

    this.since += sinceAux;

    this.loadUsers();
  }

  searchUser(term: string) {
    if (term.length <= 0) {
      this.loadUsers();
      return;
    }

    this.loading = true;

    this._userService.searchUsers(term).subscribe((users: User[]) => {
      this.users = users;
      this.loading = false;
    });
  }

  deleteUser(user:User){
    if(user._id === this._userService.user._id){
      swal('Cant delete you','Really?','error');
      return;
    }

    swal({
      title: '¿Are you sure?',
      text: 'You are going to delete '+ user.name,
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then(remove =>{
      if(remove){
        this._userService.deleteUser(user._id).subscribe(((deleted:boolean) =>{
          if(deleted) this.loadUsers();
        }));
      }
    });
  }

  saveUser(user:User){
    this._userService.updateUser(user).subscribe();
  }

  showModal(id:string){
    this._modalUploadService.showModal('user',id);
  }
}
