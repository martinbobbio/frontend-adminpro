import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsService, SharedService, SidebarService, UserService,UploadFileService, HospitalsService, DoctorService, LoginGuard, AdminGuard, VerifyTokenGuard } from './service.index';
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
    ModalUploadService,
    DoctorService,
    HospitalsService,
    LoginGuard,
    AdminGuard,
    VerifyTokenGuard
  ],
  declarations: []
})
export class ServiceModule { }
