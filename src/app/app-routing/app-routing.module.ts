import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { StarterComponent } from './../starter/starter.component';
import { LoginComponent } from './../authenticator/login/login.component';
import { RegisterComponent } from './../authenticator/register/register.component';
import { RequestComponent } from './../authenticator/request/request.component';
import { ResetComponent } from './../authenticator/reset/reset.component';
import { TablesComponent } from './../starter/content/tables/tables.component';
import { StatusReportComponent } from './../starter/content/status-report/status-report.component';
import { ReportGeneratorComponent } from './../starter/content/report-generator/report-generator.component';
import { ReactivoGeneratorComponent } from './../starter/content/reactivo-generator/reactivo-generator.component';
import { ProfileComponent } from './../starter/content/profile/profile.component';
import { Page404Component } from './../page-404/page-404.component';

// Servicios
import { CanDeactivateGuardService } from './../services/can-deactivate-guard.service';
import { AuthService } from './../services/auth.service';
import { SelectivePreloadingStrategy } from './../classes/selective-preloading-strategy';
import { MotorComponent } from './../starter/content/motor/motor.component';
import { FlujoComponent } from './../starter/content/flujo/flujo.component';
import { FootNotesComponent } from './../starter/content/foot-notes/foot-notes.component';
import { DashboardComponent } from './../starter/content/dashboard/dashboard.component';
import { AuthGuard } from '../services/auth.guard';

// Routes
const appRoutes: Routes = [
  {
    path: '', component: StarterComponent, canLoad: [AuthGuard],
    children:
      [
        { path: 'sparta-suite', component: DashboardComponent, pathMatch: 'full' },
        { path: 'motor', component: MotorComponent, pathMatch: 'full' },
        { path: 'flujo', component: FlujoComponent, pathMatch: 'full' },
        { path: 'foot-notes', component: FootNotesComponent, pathMatch: 'full' },
        { path: 'report', component: ReportGeneratorComponent, pathMatch: 'full' },
        { path: 'tabla', component: TablesComponent, pathMatch: 'full' },
        { path: 'status', component: StatusReportComponent, pathMatch: 'full' },
        { path: 'reactivo', redirectTo: 'pricing', pathMatch: 'full' },
        { path: 'pricing', component: ReactivoGeneratorComponent, pathMatch: 'full' },
        { path: 'revenue', component: ReactivoGeneratorComponent, pathMatch: 'full' },
        { path: 'profile', component: ProfileComponent, pathMatch: 'full' }
      ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'request', component: RequestComponent },
  { path: 'reset', component: ResetComponent },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [RouterModule],
  providers: [
    AuthGuard,
    AuthService,
    CanDeactivateGuardService,
    SelectivePreloadingStrategy
  ]
})
export class AppRoutingModule { }

