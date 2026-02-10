import { Routes } from '@angular/router';

import { DashboardHomeComponent } from './dashboard/dashboard-home/dashboard-home.component';
import { PatientsComponent } from './pages/patients/patients.component';
import { PatientDetailComponent } from './pages/patient-detail/patient-detail.component';
import { ConsultationsComponent } from './pages/consultations/consultations.component';
import { ReportsComponent } from './pages/reports/reports.component';

export const routes: Routes = [

 // page default
 {
   path:'',
   redirectTo:'dashboard',
   pathMatch:'full'
 },

 // dashboard
 {
   path:'dashboard',
   component: DashboardHomeComponent
 },

 // patients
 {
   path:'patients',
   component: PatientsComponent
 },

 // dossier patient
 {
   path:'patients/:id',
   component: PatientDetailComponent
 },

 // consultations
 {
   path:'consultations',
   component: ConsultationsComponent
 },

 // ⭐ REPORTS
 {
   path:'reports',
   component: ReportsComponent
 }

];
