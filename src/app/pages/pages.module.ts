import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PipesModule } from '../pipes/pipes.module';

import { PAGES_ROUTES }  from '../pages/pages.routes';

//Graphics Angular
import { ChartsModule } from 'ng2-charts';

import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { ProgressComponent } from '../pages/progress/progress.component';
import { GraphicComponent } from '../pages/graphic/graphic.component';
import { PagesComponent } from '../pages/pages.component';
import { IncrementorComponent } from '../components/incrementor/incrementor.component';
import { GraphicDonutComponent } from '../components/graphic-donut/graphic-donut.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
    declarations:[
        DashboardComponent,
        ProgressComponent,
        GraphicComponent,
        PagesComponent,
        IncrementorComponent,
        GraphicDonutComponent,
        AccountSettingsComponent,
        PromisesComponent,
        RxjsComponent,
        ProfileComponent,
    ],
    exports:[
        DashboardComponent,
        ProgressComponent,
        GraphicComponent,
    ],
    imports:[
        CommonModule,
        SharedModule,
        FormsModule,
        ChartsModule,
        PipesModule,
        PAGES_ROUTES
    ]
})

export class PagesModule{

}