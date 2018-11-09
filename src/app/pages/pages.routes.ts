import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { GraphicComponent } from './graphic/graphic.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { LoginGuard } from '../guards/login.guard';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { DoctorComponent } from './doctors/doctor.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { SearchComponent } from './search/search.component';
import { AdminGuard } from '../guards/admin.guard';

const pagesRoutes:Routes = [
    { path: '', component:PagesComponent, canActivate:[ LoginGuard ], children: [
        { path: 'dashboard', component:DashboardComponent, data: { title: 'Dashboard' } },
        { path: 'progress', component:ProgressComponent, data: { title: 'Progress' } },
        { path: 'graphic', component:GraphicComponent, data: { title: 'Graphics' } },
        { path: 'promises', component:PromisesComponent, data: { title: 'promises' } },
        { path: 'rxjs', component:RxjsComponent, data: { title: 'RxJs' } },
        { path: 'settings', component:AccountSettingsComponent, data: { title: 'Settings' } },
        { path: 'profile', component:ProfileComponent, data: { title: 'Profile ' } },
        { path: 'search/:term', component:SearchComponent, data: { title: 'Search ' } },
        { path: 'users', canActivate:[AdminGuard], component:UsersComponent, data: { title: 'Users ' } },
        { path: 'hospitals', component:HospitalsComponent, data: { title: 'Hospitals ' } },
        { path: 'doctors', component:DoctorsComponent, data: { title: 'Doctors ' } },
        { path: 'doctor/:id', component:DoctorComponent, data: { title: 'Update doctor ' } },
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        
    ] },
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);