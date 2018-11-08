import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hospital } from '../../models/hospital.model';
import { DoctorService } from '../../services/doctor/doctor.service';
import { HospitalsService } from '../../services/hospitals/hospitals.service';
import { Doctor } from '../../models/doctor.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styles: []
})
export class DoctorComponent implements OnInit {

  hospitals:Hospital[] = [];
  doctor:Doctor = new Doctor('','','','','');
  hospital:Hospital = new Hospital('');

  constructor(public _doctorService:DoctorService, public _hospitalService:HospitalsService, public router:Router, public activatedRoute:ActivatedRoute, public _modalUploadService:ModalUploadService) {
    activatedRoute.params.subscribe(params => {
      if(params['id'] !== 'new') this.getDoctor(params['id']);
    });
  }

  ngOnInit() {
    this._hospitalService.loadAllHospitals().subscribe((response:any) => this.hospitals = response.hospitals);
    this._modalUploadService.notification.subscribe((response) => this.doctor.img = response.entity.img);
  }

  saveDoctor(form: NgForm){
    if(form.invalid) return;
    this._doctorService.createDoctor(this.doctor).subscribe((doctor)=>{
      if(!doctor._id){
        this.doctor = doctor._id;
        this.router.navigate(['/doctor', doctor._id])
      }
    });
  }

  getDoctor(id:string){
    this._doctorService.getDoctor(id).subscribe(doctor =>{
      this.doctor = doctor;
      this.doctor.hospital = doctor.hospital._id;
      this.changeHospital(this.doctor.hospital);
    });
  }

  changeHospital(id:string){
    this._hospitalService.getHospital(id).subscribe(hospital => this.hospital = hospital);
  }

  changePhoto(){
    this._modalUploadService.showModal('doctor', this.doctor._id);
  }

}
