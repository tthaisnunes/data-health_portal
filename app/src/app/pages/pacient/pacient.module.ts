import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacientRoutingModule } from './pacient-routing.module';

import { HistoryComponent } from './history/history.component';
import { DoctorCalendarComponent } from './doctor-calendar/doctor-calendar.component';
import { DashboardComponent } from '../pacient/dashboard/dashboard.component';
import { MedicalClinicListComponent } from './medical-clinic-list/medical-clinic-list.component';

@NgModule({
  declarations: [
    HistoryComponent,
    DoctorCalendarComponent,
    DashboardComponent,
    MedicalClinicListComponent
  ],
  imports: [
    CommonModule,
    PacientRoutingModule
  ]
})
export class PacientModule { }
