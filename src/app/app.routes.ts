import { Routes,RouterModule } from '@angular/router';

import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './auth/login.component';
import { RegisterComponent } from './auth/register.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GraphicComponent } from './pages/graphic/graphic.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';


const appRoutes:Routes = [
    { path: '', component:PagesComponent, children: [
        { path: 'dashboard', component:DashboardComponent },
        { path: 'progress', component:ProgressComponent },
        { path: 'graphic', component:GraphicComponent },
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ] },
    { path: 'login', component:LoginComponent },
    { path: 'register', component:RegisterComponent },
    { path: '**', component:NopagefoundComponent },
]

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash:true});