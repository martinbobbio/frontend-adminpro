import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { GraphicComponent } from './graphic/graphic.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

const pagesRoutes:Routes = [
    { path: '', component:PagesComponent, children: [
        { path: 'dashboard', component:DashboardComponent },
        { path: 'progress', component:ProgressComponent },
        { path: 'graphic', component:GraphicComponent },
        { path: 'settings', component:AccountSettingsComponent },
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ] },
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);