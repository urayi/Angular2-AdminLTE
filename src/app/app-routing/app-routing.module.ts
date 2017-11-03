import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { StarterComponent } from './../starter/starter.component';
import { LoginComponent } from './../authenticator/login/login.component';
import { RegisterComponent } from './../authenticator/register/register.component';

import { TablesComponent } from './../starter/content/tables/tables.component';
import { StatusReportComponent } from './../starter/content/status-report/status-report.component';
import { ReportGeneratorComponent } from './../starter/content/report-generator/report-generator.component';
import { ReactivoGeneratorComponent } from './../starter/content/reactivo-generator/reactivo-generator.component';
import { ProfileComponent } from './../starter/content/profile/profile.component';
import { Page404Component } from './../page-404/page-404.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: StarterComponent,
        children: [
          { path: 'sparta-suite' , redirectTo: '', pathMatch: 'full' },
          { path: 'motor', redirectTo: '', pathMatch: 'full' },
          { path: 'flujo', redirectTo: '', pathMatch: 'full' },
          { path: 'foot-notes', redirectTo: '', pathMatch: 'full' },
          { path: 'report' , redirectTo: '', pathMatch: 'full' },
          { path: 'tabla', component: TablesComponent },
          { path: 'status', component: StatusReportComponent },
          { path: 'reactivo' , redirectTo: '', pathMatch: 'full' },
          { path: 'pricing', component: ReactivoGeneratorComponent },
          { path: 'revenue', component: ReactivoGeneratorComponent },
          { path: 'profile', component: ProfileComponent}
        ]
      },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ])
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
