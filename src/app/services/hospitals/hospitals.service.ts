import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../environments/environment";
import { UserService } from '../user/user.service';

import swal from "sweetalert";
import { Hospital } from '../../models/hospital.model';

@Injectable()
export class HospitalsService {

  constructor(public http:HttpClient, public _userService:UserService) { }

  loadHospitals(since:number = 0){
    let url = `${environment.backend}/hospital?since=${since}`;
    return this.http.get(url);
  }

  loadAllHospitals(){
    let url = `${environment.backend}/hospital?since=all`;
    return this.http.get(url);
  }

  getHospital(id:string){
    let url = `${environment.backend}/hospital/${id}`;
    return this.http.get(url).map((response:any) => response.hospital);
  }

  deleteHospital(id:string){
    let url = `${environment.backend}/hospital/${id}?token=${this._userService.token}`;
    return this.http.delete(url).map((response:any) => swal('Hospital deleted', 'The hospital has been deleted correctly','success'));
  }

  createHospital(name:string){
    let url = `${environment.backend}/hospital?token=${this._userService.token}`;
    return this.http.post(url, { name }).map((response:any) => response.hospital);
  }

  searchHospital(term:string){
    let url = `${environment.backend}/search/collection/hospitals/${term}`;
    return this.http.get(url).map((response:any) => response.hospitals);
  }

  updateHospital(hospital:Hospital){
    let url = `${environment.backend}/hospital/${hospital._id}?token=${this._userService.token}`;
    return this.http.put(url, hospital).map((response:any) =>{
      swal('Hospital has been updated', hospital.name, 'success');
      return response.hospital;
    });
  }

}
