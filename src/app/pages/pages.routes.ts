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

const pagesRoutes:Routes = [
    { path: '', component:PagesComponent, canActivate:[ LoginGuard ], children: [
        { path: 'dashboard', component:DashboardComponent, data: { title: 'Dashboard' } },
        { path: 'progress', component:ProgressComponent, data: { title: 'Progress' } },
        { path: 'graphic', component:GraphicComponent, data: { title: 'Graphics' } },
        { path: 'profile', component:ProfileComponent, data: { title: 'Profile ' } },
        { path: 'settings', component:AccountSettingsComponent, data: { title: 'Settings' } },
        { path: 'promises', component:PromisesComponent, data: { title: 'promises' } },
        { path: 'rxjs', component:RxjsComponent, data: { title: 'RxJs' } },
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ] },
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);