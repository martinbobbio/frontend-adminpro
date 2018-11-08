import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../environments/environment";
import { UserService } from '../user/user.service';

import swal from "sweetalert";
import { Doctor } from '../../models/doctor.model';

@Injectable()
export class DoctorService {

  constructor(public http:HttpClient, public _userService:UserService) { }

  loadDoctors(since:number = 0){
    let url = `${environment.backend}/doctor?since=${since}`;
    return this.http.get(url);
  }

  getDoctor(id:string){
    let url = `${environment.backend}/doctor/${id}`;
    return this.http.get(url).map((response:any) => response.doctor);
  }

  deleteDoctor(id:string){
    let url = `${environment.backend}/doctor/${id}?token=${this._userService.token}`;
    return this.http.delete(url).map((response:any) => swal('Doctor deleted', 'The doctor has been deleted correctly','success'));
  }

  createDoctor(doctor:Doctor){
    
    if(doctor._id){
      let url = `${environment.backend}/doctor/${doctor._id}?token=${this._userService.token}`;
      return this.http.put(url,doctor).map((response:any) => {
        swal('Doctor updated', 'The doctor has been updated correctly','success')
        return response.doctor;
      });
    }else{
      let url = `${environment.backend}/doctor?token=${this._userService.token}`;
      return this.http.post(url,doctor).map((response:any) => {
        swal('Doctor created', 'The doctor has been created correctly','success')
        return response.doctor;
      });
    }
    
  }

  searchDoctor(term:string){
    let url = `${environment.backend}/search/collection/doctors/${term}`;
    return this.http.get(url).map((response:any) => response.doctors);
  }

  updateDoctor(doctor:Doctor){
    let url = `${environment.backend}/doctor/${doctor._id}?token=${this._userService.token}`;
    return this.http.put(url, doctor).map((response:any) =>{
      swal('Doctor has been updated', doctor.name, 'success');
      return response.doctor;
    });
  }

}
