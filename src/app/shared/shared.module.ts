import { NgModule } from '@angular/core';

import { NopagefoundComponent } from '../shared/nopagefound/nopagefound.component';
import { HeaderComponent } from '../shared/header/header.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { BreadcumbsComponent } from '../shared/breadcumbs/breadcumbs.component';

@NgModule({
    declarations:[
        NopagefoundComponent,
        HeaderComponent,
        SidebarComponent,
        BreadcumbsComponent,
    ],
    exports:[
        NopagefoundComponent,
        HeaderComponent,
        SidebarComponent,
        BreadcumbsComponent,
    ]
})

export class SharedModule{

}