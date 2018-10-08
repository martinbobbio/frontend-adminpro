import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { PAGES_ROUTES }  from '../pages/pages.routes'

import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { ProgressComponent } from '../pages/progress/progress.component';
import { GraphicComponent } from '../pages/graphic/graphic.component';
import { PagesComponent } from '../pages/pages.component';

@NgModule({
    declarations:[
        DashboardComponent,
        ProgressComponent,
        GraphicComponent,
        PagesComponent,
    ],
    exports:[
        DashboardComponent,
        ProgressComponent,
        GraphicComponent,
        PagesComponent,
    ],
    imports:[
        SharedModule,
        PAGES_ROUTES
    ]
})

export class PagesModule{

}