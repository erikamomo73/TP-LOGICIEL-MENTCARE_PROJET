import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { DashboardHomeComponent } from './dashboard/dashboard-home/dashboard-home.component';
import { PatientsComponent } from './pages/patients/patients.component';

const routes: Routes = [

  {
    path: '',
    component: MainLayoutComponent,
    children: [

      { path: 'dashboard', component: DashboardHomeComponent },
      { path: 'patients', component: PatientsComponent },

      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }

    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
