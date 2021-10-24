import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { MedicalClinicListComponent } from './medical-clinic-list/medical-clinic-list.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  {
    path: '',
    component: HistoryComponent
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
    path: 'history/:id',
    component: HistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacientRoutingModule { }
