import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicalClinicRoutingModule } from './medical-clinic-routing.module';
import { PacientHistoryComponent } from './pacient-history/pacient-history.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    PacientHistoryComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MedicalClinicRoutingModule
  ]
})
export class MedicalClinicModule { }
