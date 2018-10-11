import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { GraphicComponent } from './graphic/graphic.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const pagesRoutes:Routes = [
    { path: '', component:PagesComponent, children: [
        { path: 'dashboard', component:DashboardComponent, data: { title: 'Dashboard' } },
        { path: 'progress', component:ProgressComponent, data: { title: 'Progreso' } },
        { path: 'graphic', component:GraphicComponent, data: { title: 'Gráficas' } },
        { path: 'settings', component:AccountSettingsComponent, data: { title: 'Ajustes' } },
        { path: 'promises', component:PromisesComponent, data: { title: 'Promesas' } },
        { path: 'rxjs', component:RxjsComponent, data: { title: 'RxJs' } },
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ] },
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);