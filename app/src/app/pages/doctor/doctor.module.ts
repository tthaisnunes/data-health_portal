import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorRoutingModule } from '../doctor/doctor-routing.module';
import { MasterLayoutComponent } from '../../components/master-layout/master-layout.component';
import { SharedModule } from '../../components/shared/shared.module';
import { CalendarComponent } from './calendar/calendar.component';
import { PacientHistoryComponent } from './pacient-history/pacient-history.component';

@NgModule({
  declarations: [
    MasterLayoutComponent,
    CalendarComponent,
    PacientHistoryComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    SharedModule
  ]
})

export class DoctorModule { }
