import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsService, SharedService, SidebarService, UserService,UploadFileService, LoginGuard, HospitalsService, DoctorService } from './service.index';
import { ModalUploadService } from './../components/modal-upload/modal-upload.service'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SettingsService,
    SharedService,
    SidebarService,
    UserService,
    UploadFileService,
    LoginGuard,
    ModalUploadService,
    DoctorService,
    HospitalsService,
  ],
  declarations: []
})
export class ServiceModule { }
