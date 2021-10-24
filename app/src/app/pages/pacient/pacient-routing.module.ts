import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardPacientComponent } from '../pacient/dashboard/dashboard.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { MedicalClinicListComponent } from './medical-clinic-list/medical-clinic-list.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardPacientComponent
  },
  {
    path: 'doctor-list',
    component: DoctorListComponent
  },
  {
    path: 'medical-clinic-list',
    component: MedicalClinicListComponent
  },
  {
    path: 'history',
    component: HistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacientRoutingModule { }
