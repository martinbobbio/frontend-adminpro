import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../services/doctor/doctor.service';
import { Doctor } from '../../models/doctor.model';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';

declare var swal: any;

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styles: []
})
export class DoctorsComponent implements OnInit {

  doctors: Doctor[] = [];
  totalDoctors: number = 0;
  loading: boolean = true;
  since: number = 0;

  constructor(public _doctorService:DoctorService, public _modalUploadService:ModalUploadService) {}

  ngOnInit() {
    this.loadDoctors();

    this._modalUploadService.notification.subscribe((response) => {
      this.loadDoctors();
    });
  }

  searchDoctor(term: string) {
    if (term.length <= 0) {
      this.loadDoctors();
      return;
    }

    this.loading = true;

    this._doctorService.searchDoctor(term).subscribe((doctors: Doctor[]) => {
      this.doctors = doctors;
      this.loading = false;
    });
  }

  loadDoctors() {
    this._doctorService.loadDoctors(this.since).subscribe((response: any) => {
      this.totalDoctors = response.total;
      this.doctors = response.doctors;
      this.loading = false;
    });
  }

  deleteDoctor(doctor:Doctor){

    swal({
      title: '¿Are you sure?',
      text: 'You are going to delete '+ doctor.name,
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then(remove =>{
      if(remove){
        this._doctorService.deleteDoctor(doctor._id).subscribe(() => this.loadDoctors());
      }
    });
  }

  updateImage(doctor:Doctor){
    this._modalUploadService.showModal('doctor', doctor._id)
  }

  changeSince(sinceAux: number) {
    let since = this.since + sinceAux;

    if (since >= this.totalDoctors) return;
    if (since < 0) return;

    this.since += sinceAux;

    this.loadDoctors();
  }

}
