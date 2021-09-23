import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicalClinicRoutingModule } from './medical-clinic-routing.module';
import { CalendarComponent } from './calendar/calendar.component';
import { PacientHistoryComponent } from './pacient-history/pacient-history.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    CalendarComponent,
    PacientHistoryComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MedicalClinicRoutingModule
  ]
})
export class MedicalClinicModule { }
