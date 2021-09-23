import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorRoutingModule } from '../doctor/doctor-routing.module';
import { MasterLayoutComponent } from '../../components/master-layout/master-layout.component';
import { SharedModule } from '../../components/shared/shared.module';
import { CalendarComponent } from './calendar/calendar.component';
import { PacientHistoryComponent } from './pacient-history/pacient-history.component';
import { PacientDetailsComponent } from './pacient-details/pacient-details.component';

@NgModule({
  declarations: [
    MasterLayoutComponent,
    CalendarComponent,
    PacientHistoryComponent,
    PacientDetailsComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    SharedModule
  ]
})

export class DoctorModule { }
