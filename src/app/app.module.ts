import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Routes
import { APP_ROUTES } from './app.routes'

//Components
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { GraphicComponent } from './pages/graphic/graphic.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcumbsComponent } from './shared/breadcumbs/breadcumbs.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './auth/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NopagefoundComponent,
    DashboardComponent,
    ProgressComponent,
    GraphicComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcumbsComponent,
    PagesComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
