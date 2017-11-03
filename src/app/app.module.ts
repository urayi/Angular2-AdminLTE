import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { StarterRoutingModule } from './starter/starter-routing/starter-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StarterComponent } from './starter/starter.component';
import { HeaderComponent } from './starter/header/header.component';
import { LeftSideComponent } from './starter/left-side/left-side.component';
import { ContentComponent } from './starter/content/content.component';
import { FooterComponent } from './starter/footer/footer.component';
import { SidebarComponent } from './starter/sidebar/sidebar.component';
import { TablesComponent } from './starter/content/tables/tables.component';
import { ReportGeneratorComponent } from './starter/content/report-generator/report-generator.component';
import { StatusReportComponent } from './starter/content/status-report/status-report.component';
import { ReactivoGeneratorComponent } from './starter/content/reactivo-generator/reactivo-generator.component';
import { LoginComponent } from './authenticator/login/login.component';
import { RegisterComponent } from './authenticator/register/register.component';
import { ProfileComponent } from './starter/content/profile/profile.component';
import { Page404Component } from './page-404/page-404.component';
import { RequestComponent } from './authenticator/request/request.component';

@NgModule({
  declarations: [
    AppComponent,
    StarterComponent,
    HeaderComponent,
    LeftSideComponent,
    ContentComponent,
    FooterComponent,
    SidebarComponent,
    TablesComponent,
    ReportGeneratorComponent,
    StatusReportComponent,
    ReactivoGeneratorComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    Page404Component,
    RequestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    StarterRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
