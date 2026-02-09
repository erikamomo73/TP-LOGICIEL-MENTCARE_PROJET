import { Routes } from '@angular/router';

import { DashboardHomeComponent } from './dashboard/dashboard-home/dashboard-home.component';
import { PatientsComponent } from './pages/patients/patients.component';
import { PatientDetailComponent } from './pages/patient-detail/patient-detail.component';

export const routes: Routes = [

  { path:'', redirectTo:'dashboard', pathMatch:'full' },

  { path:'dashboard', component: DashboardHomeComponent },

  { path:'patients', component: PatientsComponent },

  { path:'patient/:id', component: PatientDetailComponent }

];
