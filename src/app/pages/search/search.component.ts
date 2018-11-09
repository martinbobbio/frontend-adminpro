import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { User } from '../../models/user.model';
import { Hospital } from '../../models/hospital.model';
import { Doctor } from '../../models/doctor.model';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  users: User[] = [];
  hospitals: Hospital[] = [];
  doctors: Doctor[] = []

  constructor(public activatedRoute:ActivatedRoute, public http:HttpClient) {
    activatedRoute.params.subscribe(params => {
      this.search(params['term']);
    });
  }

  ngOnInit() {
  }

  search(term:string){
    let url = `${environment.backend}/search/all/${term}`;
    this.http.get(url).subscribe((response:any) => {
      this.hospitals = response.hospitals;
      this.doctors = response.doctors;
      this.users = response.users;
    })
  }

}
