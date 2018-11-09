import { Routes, RouterModule, CanActivate } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraphicComponent } from './graphic/graphic.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { DoctorComponent } from './doctors/doctor.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { SearchComponent } from './search/search.component';
import { AdminGuard } from '../guards/admin.guard';
import { VerifyTokenGuard } from '../guards/verify-token.guard';

const pagesRoutes:Routes = [
    { path: 'dashboard', component:DashboardComponent, data: { title: 'Dashboard' }, canActivate: [VerifyTokenGuard] },
    { path: 'progress', component:ProgressComponent, data: { title: 'Progress' }, canActivate: [VerifyTokenGuard] },
    { path: 'graphic', component:GraphicComponent, data: { title: 'Graphics' }, canActivate: [VerifyTokenGuard] },
    { path: 'promises', component:PromisesComponent, data: { title: 'promises' }, canActivate: [VerifyTokenGuard] },
    { path: 'rxjs', component:RxjsComponent, data: { title: 'RxJs' }, canActivate: [VerifyTokenGuard] },
    { path: 'settings', component:AccountSettingsComponent, data: { title: 'Settings' }, canActivate: [VerifyTokenGuard] },
    { path: 'profile', component:ProfileComponent, data: { title: 'Profile ' }, canActivate: [VerifyTokenGuard] },
    { path: 'search/:term', component:SearchComponent, data: { title: 'Search ' }, canActivate: [VerifyTokenGuard] },
    { path: 'users', canActivate:[AdminGuard, VerifyTokenGuard], component:UsersComponent, data: { title: 'Users ' } },
    { path: 'hospitals', component:HospitalsComponent, data: { title: 'Hospitals ' }, canActivate: [VerifyTokenGuard] },
    { path: 'doctors', component:DoctorsComponent, data: { title: 'Doctors ' }, canActivate: [VerifyTokenGuard] },
    { path: 'doctor/:id', component:DoctorComponent, data: { title: 'Update doctor ' }, canActivate: [VerifyTokenGuard] },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);