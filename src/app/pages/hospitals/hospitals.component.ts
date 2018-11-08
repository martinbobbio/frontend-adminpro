import { Component, OnInit } from '@angular/core';
import { HospitalsService } from '../../services/hospitals/hospitals.service';
import { Hospital } from '../../models/hospital.model';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';

declare var swal: any;

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styles: []
})
export class HospitalsComponent implements OnInit {

  hospitals: Hospital[] = [];
  totalHospitals: number = 0;
  loading: boolean = true;
  since: number = 0;

  constructor(public _hospitalService:HospitalsService, public _modalUploadService:ModalUploadService) {}

  ngOnInit() {
    this.loadHospitals();

    this._modalUploadService.notification.subscribe((response) => {
      this.loadHospitals();
    });
  }

  searchHospital(term: string) {
    if (term.length <= 0) {
      this.loadHospitals();
      return;
    }

    this.loading = true;

    this._hospitalService.searchHospital(term).subscribe((hospitals: Hospital[]) => {
      this.hospitals = hospitals;
      this.loading = false;
    });
  }

  loadHospitals() {
    this._hospitalService.loadHospitals(this.since).subscribe((response: any) => {
      this.totalHospitals = response.total;
      this.hospitals = response.hospitals;
      this.loading = false;
    });
  }

  createHospital(){
    swal({
      title: 'Create hospital',
      text: 'Enter the name of the hospital',
      content: 'input',
      icon: 'info',
      buttons: true,
      dangerMode: true
    }).then((value:string) => {
      if(!value || value.length === 0) return;
      this._hospitalService.createHospital(value).subscribe(() => this.loadHospitals());
    })
  }

  deleteHospital(hospital:Hospital){

    swal({
      title: '¿Are you sure?',
      text: 'You are going to delete '+ hospital.name,
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then(remove =>{
      if(remove){
        this._hospitalService.deleteHospital(hospital._id).subscribe(() => this.loadHospitals());
      }
    });
  }

  saveHospital(hospital:Hospital){
    this._hospitalService.updateHospital(hospital).subscribe();
  }

  updateImage(hospital:Hospital){
    this._modalUploadService.showModal('hospital', hospital._id)
  }

  changeSince(sinceAux: number) {
    let since = this.since + sinceAux;

    if (since >= this.totalHospitals) return;
    if (since < 0) return;

    this.since += sinceAux;

    this.loadHospitals();
  }

}
