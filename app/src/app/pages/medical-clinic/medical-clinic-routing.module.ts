import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardMedicalClinicComponent } from './dashboard/dashboard.component';
import { CalendarClinicComponent } from './calendar/calendar.component';
import { PacientHistoryComponent } from './pacient-history/pacient-history.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardMedicalClinicComponent
  },
  {
    path: 'calendar',
    component: CalendarClinicComponent
  },
  {
    path: 'pacient-history',
    component: PacientHistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicalClinicRoutingModule { }
