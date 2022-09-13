import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BannerComponent } from './banner/banner.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { MainContentComponent } from './main-content/main-content.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { IndexComponent } from './index/index.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { RedesComponent } from './redes/redes.component';
import { LogInComponent } from './log-in/log-in.component';
import { NavbardashboardComponent } from './navbardashboard/navbardashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BannerComponent,
    PersonalInformationComponent,
    MainContentComponent,
    LoginComponent,
    ErrorComponent,
    IndexComponent,
    ExperienciaComponent,
    RedesComponent,
    LogInComponent,
    NavbardashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
