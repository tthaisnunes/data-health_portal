import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../pacient/dashboard/dashboard.component';
import { DoctorCalendarComponent } from './doctor-calendar/doctor-calendar.component';
import { MedicalClinicListComponent } from './medical-clinic-list/medical-clinic-list.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'doctor-calendar',
    component: DoctorCalendarComponent
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
