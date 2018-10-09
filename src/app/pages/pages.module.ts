import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { PAGES_ROUTES }  from '../pages/pages.routes';

//Graphics Angular
import { ChartsModule } from 'ng2-charts';

import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { ProgressComponent } from '../pages/progress/progress.component';
import { GraphicComponent } from '../pages/graphic/graphic.component';
import { PagesComponent } from '../pages/pages.component';
import { IncrementorComponent } from '../components/incrementor/incrementor.component';
import { GraphicDonutComponent } from '../components/graphic-donut/graphic-donut.component';


@NgModule({
    declarations:[
        DashboardComponent,
        ProgressComponent,
        GraphicComponent,
        PagesComponent,
        IncrementorComponent,
        GraphicDonutComponent
    ],
    exports:[
        DashboardComponent,
        ProgressComponent,
        GraphicComponent,
        PagesComponent,
    ],
    imports:[
        SharedModule,
        FormsModule,
        ChartsModule,
        PAGES_ROUTES
    ]
})

export class PagesModule{

}