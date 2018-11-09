//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

//Graphics Angular
import { ChartsModule } from 'ng2-charts';

//Components
import { NopagefoundComponent } from '../components/nopagefound/nopagefound.component';
import { HeaderComponent } from '../components/header/header.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { BreadcumbsComponent } from '../components/breadcumbs/breadcumbs.component';
import { IncrementorComponent } from '../components/incrementor/incrementor.component';
import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';
import { GraphicDonutComponent } from '../components/graphic-donut/graphic-donut.component';
import { GraphicBarComponent } from '../components/graphic-bar/graphic-bar.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
    imports:[
        RouterModule,
        CommonModule,
        PipesModule,
        FormsModule,
        ChartsModule
    ],
    declarations:[
        NopagefoundComponent,
        HeaderComponent,
        SidebarComponent,
        BreadcumbsComponent,
        IncrementorComponent,
        ModalUploadComponent,
        GraphicDonutComponent,
        GraphicBarComponent,
    ],
    exports:[
        NopagefoundComponent,
        HeaderComponent,
        SidebarComponent,
        BreadcumbsComponent,
        IncrementorComponent,
        ModalUploadComponent,
        GraphicDonutComponent,
        GraphicBarComponent,
    ]
})

export class ComponentsModule{

}